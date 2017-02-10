import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: 'ngcontent', loadChildren: "app/demo1/demo1.module#Demo1Module" },
	{ path: 'contentchild', loadChildren: "app/demo2/demo2.module#Demo2Module" }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
