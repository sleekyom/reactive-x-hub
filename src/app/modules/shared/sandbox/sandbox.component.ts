import {
  Component,
  HostListener,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import { HubEvents } from './enums';
import { HubMessage } from './interfaces';
import { StackblitzSdkService } from './stackblitz-sdk.service';
import { Stream } from './stream';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.scss']
})
export class SandboxComponent implements OnInit {
  @ViewChild('iframe', { static: true }) iframe;
  @Input() project;
  subjects: Stream[] = [];
  subscription: Stream;
  port: any = null;
  isConnected = false;

  public HubEvents = HubEvents;
  constructor(private sdk: StackblitzSdkService) {}

  ngOnInit() {
    this.sdk.embed(this.iframe.nativeElement, this.project);
    this.subjects = [];
    this.subscription = new Stream(-1);
  }

  onClick(type: HubEvents, id, value = null) {
    this.subjects[id].push({ value, type });
    this.port.postMessage({ header: type, id, value }, '*');
  }

  @HostListener('window:message', ['$event'])
  onmessage(event: HubMessage) {
    if (event.origin.includes('stackblitz')) {
      console.log(event);
      if (event.data.header === HubEvents.Handshake) {
        this.port = event.source;
        if (this.isConnected) {
          this.subjects.forEach(subject => subject.clean());
          this.subjects.length = 0;
          this.subscription.clean();
        }
        this.isConnected = true;
      } else if (event.data.header === HubEvents.Add) {
        this.subjects.push(new Stream(event.data.value));
      } else if (event.data.header === HubEvents.Next) {
        this.subscription.push({
          type: HubEvents.Next,
          value: event.data.value
        });
      } else if (event.data.header === HubEvents.Error) {
        this.subscription.push({
          type: HubEvents.Error,
          value: event.data.value
        });
      } else if (event.data.header === HubEvents.Complete) {
        this.subscription.push({
          type: HubEvents.Complete,
          value: event.data.value
        });
      }
    }
  }
}
