import { AfterViewInit, Component, ViewEncapsulation, ViewChild, Input } from "@angular/core";
import { Revenue_schema } from "src/app/model/revenue-table";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import * as Highcharts from "highcharts";
import { CurrencyComponent } from "src/app/currency/currency.component";
import { CurrencyService } from "src/app/services/currency.service";
import { style } from "d3";




export const Revenue_data: Revenue_schema[] = [
  {
    Grouping: "Sweater",
    Revenue: 129.518,
    Benchmark: 34.112,
    Rank: "Better than " + 94 + "%",
  },
  {
    Grouping: "Shirt/Blouse",
    Revenue: 65.987,
    Benchmark: 18.902,
    Rank: "Better than " + 91 + "%",
  },
  {
    Grouping: "Trouser",
    Revenue: 61.205,
    Benchmark: 19.536,
    Rank: "Better than " + 94 + "%",
  },
  {
    Grouping: "Coat",
    Revenue: -52.21,
    Benchmark: 9.978,
    Rank: "Better than " + -86 + "%",
  },
  {
    Grouping: "Jeans",
    Revenue: 24.691,
    Benchmark: 10.335,
    Rank: "Better than " + 76 + "%",
  },
  {
    Grouping: "Short-sleeved",
    Revenue: 42.931,
    Benchmark: 9.735,
    Rank: "Better than " + 100 + "%",
  },
  {
    Grouping: "Shirt/Blouse",
    Revenue: 65.987,
    Benchmark: 18.902,
    Rank: "Better than " + 91 + "%",
  },
  {
    Grouping: "Trouser",
    Revenue: 61.205,
    Benchmark: 19.536,
    Rank: "Better than " + 94 + "%",
  },
  {
    Grouping: "Coat",
    Revenue: 52.21,
    Benchmark: 9.978,
    Rank: "Better than " + 86 + "%",
  },
  {
    Grouping: "Jeans",
    Revenue: -24.691,
    Benchmark: 10.335,
    Rank: "Better than " + -76 + "%",
  },
  {
    Grouping: "Short-sleeved",
    Revenue: 42.931,
    Benchmark: 9.735,
    Rank: "Better than " + 100 + "%",
  },
  {
    Grouping: "Shirt/Blouse",
    Revenue: 65.987,
    Benchmark: 18.902,
    Rank: "Better than " + 91 + "%",
  },
  {
    Grouping: "Trouser",
    Revenue: 61.205,
    Benchmark: 19.536,
    Rank: "Better than " + 94 + "%",
  },
  {
    Grouping: "Coat",
    Revenue: 52.21,
    Benchmark: 9.978,
    Rank: "Better than " + 86 + "%",
  },
  {
    Grouping: "Jeans",
    Revenue: 24.691,
    Benchmark: 10.335,
    Rank: "Better than " + 76 + "%",
  },
  {
    Grouping: "Short-sleeved",
    Revenue: 42.931,
    Benchmark: 9.735,
    Rank: "Better than " + 100 + "%",
  },
  {
    Grouping: "Shirt/Blouse",
    Revenue: 65.987,
    Benchmark: 18.902,
    Rank: "Better than " + 91 + "%",
  },
  {
    Grouping: "Trouser",
    Revenue: 61.205,
    Benchmark: 19.536,
    Rank: "Better than " + 94 + "%",
  },
  {
    Grouping: "Shirt/Blouse",
    Revenue: 65.987,
    Benchmark: 18.902,
    Rank: "Better than " + 91 + "%",
  },
  {
    Grouping: "Trouser",
    Revenue: 61.205,
    Benchmark: 19.536,
    Rank: "Better than " + 94 + "%",
  },
  {
    Grouping: "Coat",
    Revenue: 52.21,
    Benchmark: 9.978,
    Rank: "Better than " + 86 + "%",
  },
  {
    Grouping: "Jeans",
    Revenue: 24.691,
    Benchmark: 10.335,
    Rank: "Better than " + 76 + "%",
  },
  {
    Grouping: "Short-sleeved",
    Revenue: 42.931,
    Benchmark: 9.735,
    Rank: "Better than " + 100 + "%",
  },
  {
    Grouping: "Shirt/Blouse",
    Revenue: 65.987,
    Benchmark: 18.902,
    Rank: "Better than " + 91 + "%",
  },
  {
    Grouping: "Trouser",
    Revenue: 61.205,
    Benchmark: 19.536,
    Rank: "Better than " + 94 + "%",
  },
  {
    Grouping: "Shirt/Blouse",
    Revenue: 65.987,
    Benchmark: 18.902,
    Rank: "Better than " + 91 + "%",
  },
  {
    Grouping: "Trouser",
    Revenue: 61.205,
    Benchmark: 19.536,
    Rank: "Better than " + 94 + "%",
  },
  {
    Grouping: "Coat",
    Revenue: 52.21,
    Benchmark: 9.978,
    Rank: "Better than " + 86 + "%",
  },
  {
    Grouping: "Jeans",
    Revenue: 24.691,
    Benchmark: 10.335,
    Rank: "Better than " + 76 + "%",
  },
  {
    Grouping: "Short-sleeved",
    Revenue: 42.931,
    Benchmark: 9.735,
    Rank: "Better than " + 100 + "%",
  },
  {
    Grouping: "Shirt/Blouse",
    Revenue: 65.987,
    Benchmark: 18.902,
    Rank: "Better than " + 91 + "%",
  },
  {
    Grouping: "Trouser",
    Revenue: 61.205,
    Benchmark: 19.536,
    Rank: "Better than " + 94 + "%",
  },
  {
    Grouping: "Shirt/Blouse",
    Revenue: 65.987,
    Benchmark: 18.902,
    Rank: "Better than " + 91 + "%",
  },
  {
    Grouping: "Trouser",
    Revenue: 61.205,
    Benchmark: 19.536,
    Rank: "Better than " + 94 + "%",
  },
  {
    Grouping: "Coat",
    Revenue: 52.21,
    Benchmark: 9.978,
    Rank: "Better than " + 86 + "%",
  },
  {
    Grouping: "Jeans",
    Revenue: 24.691,
    Benchmark: 10.335,
    Rank: "Better than " + 76 + "%",
  },
  {
    Grouping: "Short-sleeved",
    Revenue: 42.931,
    Benchmark: 9.735,
    Rank: "Better than " + 100 + "%",
  },
  {
    Grouping: "Shirt/Blouse",
    Revenue: 65.987,
    Benchmark: 18.902,
    Rank: "Better than " + 91 + "%",
  },
  {
    Grouping: "Trouser",
    Revenue: 61.205,
    Benchmark: 19.536,
    Rank: "Better than " + 94 + "%",
  },

  
];

@Component({
  selector: "app-revenue",
  templateUrl: "./revenue.component.html",
  styleUrls: ["./revenue.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class RevenueComponent implements AfterViewInit {
  displayedColumns: string[] = ["Grouping", "Revenue", "Benchmark", "Rank"];
  dataSource = new MatTableDataSource(Revenue_data);
  Highcharts = Highcharts;

  /* Change later to a dynamic option  */
  /* ---- */

  data_labels: string[] = [];
  data_revenue: number[] = [];
  data_index: number[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;
  @ViewChild(CurrencyComponent) selectedCurrency!: string | number;
  @Input()base? = 'EUR';
  @Input()currapi?: any = [];
  @Input()result?: number = 1;
  @Input() info: any[] = [];
  barchart: any;

  constructor(private currencyService: CurrencyService,) {}
  
  ngOnInit() : void {
    this.currencyService.selectedCurrency.subscribe(currency => {
    this.base = currency
     console.log(currency)
   })
   this.dataSource.sort = this.sort;
   this.dataSource.paginator = this.paginator;
   this.renderDataForCharts();
  }
  
  ngAfterViewInit(): void {
    this.renderHighChart();
    this.sort.disableClear = true;

  }

  renderDataForCharts() {
    for (let data of Revenue_data) {
      this.data_labels.push(data.Grouping);
      this.data_revenue.push(data.Revenue);
      this.data_index.push(data.Benchmark);
    }
  }

  renderHighChart() {
    this.barchart = {
      chart: {
        type: "bar",
        scrollablePlotArea: {
          opacity: 1,
          minHeight: 50*Revenue_data.length,
        },
        backgroundColor: "transparent",
        marginBottom: 50,
      },
      title: {
        text: "",
      },
      xAxis:
        { 
          categories: this.data_labels,
          crosshair: true,
        },
      yAxis: {
        lineWidth: 1,
        showLastLabel: false,
        visible: true,
        height:375,
        labels:{
        align: 'bottom',
            x: 0,
            y: 0,
            distance:15,
            style: {marginTop: 110},
            overflow: "allow",
            marginTop: 110,
            allowOverlap: true,
            enabled: true,
        },
      },

      credits: {
        enabled: false,
      },

      legend: {
        enabled: true,
        align: 'left',
        verticalAlign: 'top',
        x: 0,
        y: 0,
        overflow: "hidden",
      },
      series: [
        {
          name: "Omsättning",
          data: this.data_revenue,
          color: "#38063A",
          legend: {
            verticalAlign: 'top',
            itemStyle: {
                fontSize: '16px'
            }
        }
              
        },
        {
          name: "Index",
          data: this.data_index,
          color: "#C5C5C5",
          legend: {
            verticalAlign: 'top',
            itemStyle: {
                fontSize: '16px'
            }
        }
            },
      ],
    };
  }
}