import { Component, OnInit } from '@angular/core';
import index from 'raw-loader!./raw/combine-all.ts.text';
import { CustomProject } from 'src/app/modules/shared/sandbox/stackblitz-sdk.service';

@Component({
  selector: 'app-combination-combine-all',
  templateUrl: './combine-all.component.html'
})
export class CombineAllComponent implements OnInit {
  project: CustomProject = {
    files: {
      'index.ts': index
    },
    title: 'map',
    description: 'map desc',
    tags: []
  };
  constructor() {}

  ngOnInit() {}
}
