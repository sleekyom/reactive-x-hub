import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { combinationRoutes } from './combination/combination-routes';
import { joinCreationRoutes } from './join-creation/join-creation-routes';
import { joinRoutes } from './join/join-routes';
import { OperatorsComponent } from './operators.component';
import { transformationRoutes } from './transformation/transformation-routes';

export const routes: Routes = [
  {
    path: '',
    component: OperatorsComponent,
    data: { name: 'index' },
    children: [
      {
        path: 'combination',

        children: combinationRoutes
      },
      {
        path: 'transformation',

        children: transformationRoutes
      },
      { path: 'join', children: joinRoutes },
      {
        path: 'join-creation',

        children: joinCreationRoutes
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperatorsRoutingModule {}
