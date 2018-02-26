import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nodes',
  templateUrl: './nodes.component.html',
  styleUrls: ['./nodes.component.css']
})
export class NodesComponent implements OnInit {

  node1 = 'Company A';
  node2 = 'University';
  node3 = 'Company B';
  node4 = 'Hometown';

  constructor() { }

  ngOnInit() {
  }

}
