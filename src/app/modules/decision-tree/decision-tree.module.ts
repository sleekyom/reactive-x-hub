import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';
import { DecisionTreeRoutingModule } from './decision-tree-routing.module';
import { DecisionTreeComponent } from './decision-tree.component';

@NgModule({
  declarations: [DecisionTreeComponent],
  imports: [
    CommonModule,
    MatTreeModule,
    DecisionTreeRoutingModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class DecisionTreeModule {}
