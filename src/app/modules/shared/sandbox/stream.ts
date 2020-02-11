import { HubEvents } from './enums';

interface StreamEvent {
  type: string;
  value: any;
}
interface IStream {
  history: StreamEvent[];
  id: number;
}

export class Stream implements IStream {
  history = [];
  isComplete = false;
  isError = false;
  constructor(public id) {}
  push(streamEvent: StreamEvent) {
    this.history.push(streamEvent);
    if (streamEvent.type === HubEvents.Complete) { this.isComplete = true; }
    if (streamEvent.type === HubEvents.Error) { this.isError = true; }
  }

  clean() {
    this.history.length = 0;
    this.isComplete = false;
    this.isError = false;
  }
  get isActive() {
    return !this.isComplete && !this.isError;
  }
}
