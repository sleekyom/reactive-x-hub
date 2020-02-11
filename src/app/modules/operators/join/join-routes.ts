import { Routes } from '@angular/router';
import { CombineAllComponent } from './combine-all/combine-all.component';
import { JoinComponent } from './join.component';

export const joinRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: JoinComponent
  },

  {
    path: 'combine-all',
    component: CombineAllComponent
  }
];
