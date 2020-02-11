import { Component, OnInit } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';

interface Node {
  name: string;
  html?: string;
  children?: Node[];
}

const TREE_DATA: Node[] = [
  {
    name: 'I have one existing Obervable, and',
    children: [{ name: 'Apple' }, { name: 'Banana' }, { name: 'Fruit loops' }]
  },
  {
    name: 'I have some Observables to combine together as one Observable, and',
    children: [
      {
        name: 'Green',
        children: [{ name: 'Broccoli' }, { name: 'Brussel sprouts' }]
      },
      {
        name: 'Orange',
        children: [{ name: 'Pumpkins' }, { name: 'Carrots' }]
      }
    ]
  },
  {
    name: 'I have no Observables yet, and',
    html: 'I have <b>0</b> <b>Observables</b> yet, and',
    children: [
      {
        name: 'I want to create a new Observable',
        html: 'I want to <b>create a new<b/> <b>Observable</b>',
        children: [
          { html: 'using <b>custom login</b>', name: 'using custom logic' },
          {
            html: 'using a<b>state machine</b>',
            name: 'using a state machine similar to a for loop'
          },
          {
            html: 'that <b>trhows </b>an <b>error</b>',
            name: 'that throws an error'
          }
        ]
      },
      {
        name: 'I want to convert a callback to an Observable',
        html: 'I want to <b>convert a callback</b> to an <b>Observable</b>',
        children: [{ name: 'Pumpkins' }, { name: 'Carrots' }]
      }
    ]
  }
];

@Component({
  selector: 'app-decision-tree',
  templateUrl: './decision-tree.component.html',
  styleUrls: ['./decision-tree.component.scss']
})
export class DecisionTreeComponent implements OnInit {
  treeControl = new NestedTreeControl<Node>(node => node.children);
  dataSource = new MatTreeNestedDataSource<Node>();
  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  ngOnInit() {}

  hasChild = (_: number, node: Node) =>
    !!node.children && node.children.length > 0;
}
