import { DecimalPipe, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ADTSettings } from 'angular-datatables/src/models/settings';

@Component({
  selector: 'app-using-ng-pipe',
  templateUrl: './using-ng-pipe.component.html'
})
export class UsingNgPipeComponent implements OnInit {

  constructor(
    private pipeInstance: UpperCasePipe,
    private pipeNumberInstance: DecimalPipe
  ) { }

  pageTitle = 'Using Angular Pipe';
  mdIntro = 'assets/docs/advanced/using-ng-pipe/intro.md';
  mdHTML = 'assets/docs/advanced/using-ng-pipe/source-html.md';
  mdTS = 'assets/docs/advanced/using-ng-pipe/source-ts.md';


  dtOptions: ADTSettings = {};

  ngOnInit(): void {

    this.dtOptions = {
      ajax: 'data/data.json',
      columns: [
        {
          title: 'ID',
          data: 'id'
        },
        {
          title: 'First name',
          data: 'firstName',
          ngPipeInstance: this.pipeInstance
        },
        {
          title: 'Last name',
          data: 'lastName',
          ngPipeInstance: this.pipeInstance
        },
        {
          title: 'Money',
          //3.6 | number: '1.0-0'}}
          data: 'id',
          ngPipeInstance: this.pipeNumberInstance,
          ngPipeArgs: ['CAD']
        }
      ]
    };
  }

}
