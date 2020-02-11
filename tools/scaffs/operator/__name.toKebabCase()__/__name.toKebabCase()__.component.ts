import { Component } from '@angular/core';
import index from 'raw-loader!./<%=name.toKebabCase()%>.ts.text';
import { CustomProject } from 'src/app/modules/shared/sandbox/stackblitz-sdk.service';

@Component({
  templateUrl: './<%=name.toKebabCase()%>.component.html'
})
export class <%=name.toPascalCase()%>Component {
  project: CustomProject = {
    files: {
      'index.ts': index
    },
    title: '<%=name%>',
    description: '',
    tags: []
  };
}
