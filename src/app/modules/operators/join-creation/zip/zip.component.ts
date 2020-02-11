import { Component, OnInit } from '@angular/core';
import index from 'raw-loader!./raw/zip.ts.text';
import { CustomProject } from 'src/app/modules/shared/sandbox/stackblitz-sdk.service';

@Component({
  templateUrl: './zip.component.html'
})
export class ZipComponent implements OnInit {
  project: CustomProject = {
    files: {
      'index.ts': index
    },
    title: 'zip',
    description: 'zip desc',
    tags: []
  };
  constructor() {}

  ngOnInit() {}
}
