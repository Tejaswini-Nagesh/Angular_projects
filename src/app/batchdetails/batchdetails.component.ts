import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-batchdetails',
  template: `<h2>inside batch details</h2>
  <ul *ngFor="let value of batches">
  <li>{{value.Name}} - {{value.Fees}} - {{value.Duration}}</li>
</ul>
  `
})
export class BatchdetailsComponent implements OnInit {


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
