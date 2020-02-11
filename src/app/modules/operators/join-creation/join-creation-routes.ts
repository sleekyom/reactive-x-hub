import { Routes } from '@angular/router';
import { JoinCreationComponent } from './join-creation.component';
import { MergeComponent } from './merge/merge.component';
import { ZipComponent } from './zip/zip.component';

export const joinCreationRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: JoinCreationComponent
  },

  {
    path: 'zip',
    component: ZipComponent
  },
  {
    path: 'merge',
    component: MergeComponent
  }
];
