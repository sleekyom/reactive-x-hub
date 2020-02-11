declare var require: any;
const html = require('!raw-loader!./raw/index.html').default;
const bridge = require('!raw-loader!./raw/bridge.ts.text').default;
const helpers = require('!raw-loader!./raw/helpers.ts.text').default;
const facade = require('!raw-loader!./raw/facade.ts.text').default;
const event = require('!raw-loader!./raw/event.ts.text').default;
import { Injectable } from '@angular/core';
import sdk from '@stackblitz/sdk';
import { Project } from '@stackblitz/sdk/typings/interfaces';
export interface CustomProject {
  files: { [path: string]: string };
  title: string;
  description: string;
  tags?: string[];
}

@Injectable({
  providedIn: 'root'
})
export class StackblitzSdkService {
  constructor() {}

  embed(element, project: CustomProject) {
    sdk.embedProject(
      element,
      {
        ...project,
        files: {
          ...project.files,
          'bridge.ts': bridge,
          'index.html': html,
          'helpers.ts': helpers,
          'facade.ts': facade,
          'event.ts': event
        },
        template: 'typescript',
        dependencies: { rxjs: 'latest' },
        settings: {
          compile: {
            trigger: 'auto',
            action: 'refresh',
            clearConsole: false
          }
        }
      },
      { height: 800 }
    );
  }
}
