import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '../shared/shared.module';
import { CombinationComponent } from './combination/combination.component';
import { JoinCreationComponent } from './join-creation/join-creation.component';
import { MergeComponent } from './join-creation/merge/merge.component';
import { ZipComponent } from './join-creation/zip/zip.component';
import { CombineAllComponent } from './join/combine-all/combine-all.component';
import { JoinComponent } from './join/join.component';
import { OperatorsRoutingModule } from './operators-routing.module';
import { OperatorsComponent } from './operators.component';
import { MapComponent } from './transformation/map/map.component';
import { TransformationComponent } from './transformation/transformation.component';
import { CombineLatestComponent } from './join-creation/combine-latest/combine-latest.component';

@NgModule({
  imports: [
    CommonModule,
    OperatorsRoutingModule,
    SharedModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatTableModule,
    CdkTableModule,
    MatSidenavModule,
    MatListModule
  ],
  declarations: [
    MapComponent,
    OperatorsComponent,
    CombineAllComponent,
    CombinationComponent,
    MergeComponent,
    ZipComponent,
    JoinComponent,
    JoinCreationComponent,
    TransformationComponent,
    CombineLatestComponent
  ]
})
export class OperatorsModule {}
