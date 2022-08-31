import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-batchlist',
  template: `<h2>inside batch list</h2>
  <ul *ngFor="let value of batches">
  <li>{{value.Name}}</li>
</ul>
  ` 
})
export class BatchlistComponent implements OnInit {
  public batches=[
    {"Name": "PPA","Duration":4 ,"Fees":16500},
    {"Name": "LBA","Duration":4 ,"Fees":1400},
    {"Name": "python","Duration":4 ,"Fees":15000},
    {"Name": "angular","Duration":4 ,"Fees":12500},


  ]

  constructor() { }

  ngOnInit(): void {
  }

}