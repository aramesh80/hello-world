import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent implements OnInit {
	
	name:string = 'Your Child Name';

	constructor() { }

	ngOnInit() {
	}

}
