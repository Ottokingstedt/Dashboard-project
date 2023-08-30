import { Component, OnInit, ViewChild, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from '@angular/material/table';
import { BrandService } from 'src/app/services/brand.service';
import { MatSort } from "@angular/material/sort";
import { Data } from '../model/data';

@Component({
  selector: 'app-api-test',
  templateUrl: './api-test.component.html',
  styleUrls: ['./api-test.component.scss']
})
export class ApiTestComponent implements OnInit{
  @ViewChild(MatSort) sort: MatSort | any; 
  @ViewChild(MatPaginator) paginator!: MatPaginator | any;

  displayedColumns: string[] = ['id', 'name'];
  dataSource = new MatTableDataSource<Data>;
  blocks!:Data[];
  search : string = '';


  
  constructor(
    private brandService: BrandService,
    private cdr: ChangeDetectorRef,
    ){

    }

  ngOnInit(): void{
  this.brandService.getData().then((data : any) =>{
  this.blocks = data
  this.dataSource = new MatTableDataSource<Data>(this.blocks)
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;

    this.cdr.detectChanges()
  console.log(this.dataSource)
 })
  }



applyFilter(event: Event){
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}
}






