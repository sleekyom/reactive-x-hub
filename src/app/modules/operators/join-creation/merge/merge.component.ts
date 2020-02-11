import { Component, OnInit } from '@angular/core';
import index from 'raw-loader!./raw/merge.ts.text';
import { CustomProject } from 'src/app/modules/shared/sandbox/stackblitz-sdk.service';
@Component({
  templateUrl: './merge.component.html'
})
export class MergeComponent implements OnInit {
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
