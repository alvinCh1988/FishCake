import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'table-tbody001',
  templateUrl: './table-tbody001.component.html',
  styleUrls: ['./table-tbody001.component.scss']
})
export class TableTbody001Component implements OnInit {

  @Input()
  public dataList: any[];

  public tableData: any[] = [];


  constructor() { }

  ngOnInit(): void { 
    this.dataList.forEach(vo => {
      this.tableData.push(Object.values(vo).map(item => item))
    })

    console.log(this.tableData);
  }



}
