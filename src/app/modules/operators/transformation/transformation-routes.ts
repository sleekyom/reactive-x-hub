import { Routes } from '@angular/router';
import { MapComponent } from './map/map.component';
import { TransformationComponent } from './transformation.component';

export const transformationRoutes: Routes = [
  { path: '', pathMatch: 'full', component: TransformationComponent },
  { path: 'map', component: MapComponent }
];
