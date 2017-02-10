import { Component, OnInit, ContentChild, ContentChildren, AfterContentInit, QueryList, ViewChild, AfterViewInit } from '@angular/core';

import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'my-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements AfterContentInit {
  /*
  @ContentChild(ChildComponent) child:ChildComponent;
  */
  /*
  @ViewChild(ChildComponent) child:ChildComponent;
  */
  @ViewChild("chld") child:ChildComponent;

  /*
  @ContentChildren(ChildComponent) childs:QueryList<ChildComponent>;
  */
  

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    //console.log(this.childs)
  }

  ngAfterViewInit() {
    //console.log(this.child)
  }
}
