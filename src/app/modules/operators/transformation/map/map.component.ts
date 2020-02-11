import { Component, OnInit } from '@angular/core';
import index from 'raw-loader!./raw/map.ts.text';
import { CustomProject } from 'src/app/modules/shared/sandbox/stackblitz-sdk.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html'
})
export class MapComponent implements OnInit {
  project: CustomProject = {
    files: {
      'index.ts': index
    },
    title: 'map',
    description: 'map desc',
    tags: []
  };

  ngOnInit() {}
}
