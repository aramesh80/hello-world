import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Demo1RoutingModule } from './demo1-routing.module';
import { Demo1Component } from './demo1.component';
import { DemoChild1Component } from './demo-child1/demo-child1.component';

@NgModule({
  imports: [
    CommonModule,
    Demo1RoutingModule
  ],
  declarations: [Demo1Component, DemoChild1Component]
})
export class Demo1Module { }
