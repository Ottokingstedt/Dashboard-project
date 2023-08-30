import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatSort } from "@angular/material/sort";
import { ArticleElement } from '../model/article-table';
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { CurrencyComponent } from "src/app/currency/currency.component";
import { CurrencyService } from "src/app/services/currency.service";
import { ARTICLE_DATA } from '../data/article';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent {
  @ViewChild(CurrencyComponent) selectedCurrency!: string | number;
  @ViewChild('MatPaginator') paginator!: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any; 
  @Input()base? = 'EUR';
  @Input()currapi?: any = [];
  @Input()result?: number = 1;
  selectForm: FormGroup;
  data_labels: string[] = [];
  data_revenue: number[] = [];
  data_index: number[] = [];
  displayedColumns: string[] = ["Article", "Sold", "Benchmark", "Rank", "Percent"];
  dataSource = new MatTableDataSource(ARTICLE_DATA); 
  isPanelOpened: boolean = true;
  trademark = new FormControl('');
  search : string = '';

  panelOpened(event : any) {
    this.isPanelOpened = true;
}

  get array(){
    return this.selectForm.get('array') as FormArray
  }

  get arrayGroup(){
    return this.selectForm.get('arrayGroup') as FormArray
  }
  constructor(
    private currencyService: CurrencyService,
    private formBuilder: FormBuilder){
      this.selectForm = this.formBuilder.group({
        test: [''],

      first: [''],
      second: [''],
      group: this.formBuilder.group({
        first: [''],
        second: [''],
        subgroup: this.formBuilder.group({
          first: [''],
          second: [''],
        }),
  
      }),
      array: this.formBuilder.array(['', '']),
      arrayGroup: this.formBuilder.array([
        this.formBuilder.group({
          first: [''],
          second: [''],
        }),
        this.formBuilder.group({
          first: [''],
          second: [''],
        }),
      ]),
      })
    }

  ngOnInit() : void {
    this.currencyService.selectedCurrency.subscribe(currency => {
    this.base = currency
     console.log(currency)
   })
  }

  ngAfterViewInit():void{
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  onSubmit(){

  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
