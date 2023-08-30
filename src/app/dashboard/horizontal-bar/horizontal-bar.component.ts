
import { Component, AfterViewInit, OnInit, Input, ViewChild, SimpleChanges } from "@angular/core";
// import { Chart, registerables } from "chart.js";
import { CurrencyService } from "../../services/currency.service";
import { CurrencyComponent } from "../../currency/currency.component";
import * as Highcharts from "highcharts";
@Component({
  selector: "app-horizontal-bar",
  templateUrl: "./horizontal-bar.component.html",
  styleUrls: ["./horizontal-bar.component.scss"],
 
})
export class HorizontalBarComponent implements AfterViewInit {
  @ViewChild(CurrencyComponent) selectedCurrency!: string | number;
  better_than: any | string[] = []
  min!: number;
  Locations: string[] = [];
  @Input() base? = "EUR";
  @Input() currapi?: any = [];
  @Input() result?: number = 1;
  @Input() info: any[] = [];

  public constructor(
    private currencyService: CurrencyService
  ) {}
  
  ngOnInit(): void {
    this.currencyService.selectedCurrency.subscribe((currency) => {
      this.base = currency;
    });
  }

  ngAfterViewInit(): void{
    this.RenderChart();
    this.RenderChart1();
    this.RenderChart2();

  }

  ngOnChanges(changes: SimpleChanges) {
  if (changes.info && this.info) {
    for (let better_than_fetch of this.info ) {
      if (better_than_fetch.Title == 'overview_better_than'){
        this.better_than = better_than_fetch.description
      }
    }
  }
}

Highcharts = Highcharts;
barchart: any;
barchart1: any;
barchart2: any;


RenderChart(){
this.barchart = { 
  chart: {
    type: 'bar',
    scrollablePlotArea: {
      opacity: 1,
      minHeight: 30
    },
    height: 125,
    width: 1200,
    backgroundColor:  "transparent",
    borderColor: "transparent",
    borderWidth:0,
    displayErrors:true,
    style: {
      "fontFamily": "inter", "fontSize":"0px", 'position':'relative'
    }
  },
  title: { 
    text: this.better_than + 'bättre än 50% av Purply Demo',
    style: {"color": '#909090', 'fontSize': "12px"}
  },
  xAxis: [
    {
      crosshair: false,
      showLastLabel: false,
      labels: {
        enabled: false,
        ticks: false
    },
    minorTickLength: 0,
    tickLength: 0
    },

  ],
  yAxis: {
    min: 0,
    max: 100,
    lineWidth: 0,
    showLastLabel: false,
    labels: {
      format: '{value}%',
  },
  plotBands: [{
    color: '#dddddd', // Color value
    from: 0, // Start of the plot band
    to: 25, // End of the plot band
    labels: {
      format: '{value}%'
  },
  }, 
  {
  color: '#bbbbbb', // Color value
  from: 25, // Start of the plot band
  to: 75, // End of the plot band
  labels: {
    format: '{value}%'
},
  },
  {
    color: '#888888', // Color value
    from: 75, // Start of the plot band
    to: 100, // End of the plot band
    labels: {
      format: '{value}%'
  },
    }
],
  },
  legend: {
    enabled: true,
    layout: 'vertical',
    floating: true,
    backgroundColor: '#FFFFFF',
    align: 'left',
    verticalAlign: 'top',
    y: 60,
    x: 100
  },
  credits: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      stacking: 'percentage',
    },
    area:{

    }
  },
  series: [
    {
      data:[
     { name: this.better_than + "Omsättning",
      color:"#38063A",
      y: 50,
      labels: {
        format: '{value}%',
    },
      }
  ],
  showInLegend: false,
  borderWidth:0,
    }
  ],
  tooltip: {
    aniamtion: false,
    pointFormat: '{series.name}:  {point.y:.0f}%',
  },
  accessibility: {
    point: {
        valueDescriptionFormat: '{index}, {point.percentage:.0f}%'
    }
},

  loading:{
    hideDuration:100,
    labelStyle:{"fontWeight": "bold", "position": "relative", "top": "45%"},
    style:{"position": "absolute", "backgroundColor": "#ffffff", "opacity": 0.5, "textAlign": "center"}
    }
}
}

RenderChart1(){
  this.barchart1 = { 
    chart: {
      type: 'bar',
      scrollablePlotArea: {
        opacity: 1,
        minHeight: 30
      },
      height: 125,
      width: 1200,
      backgroundColor:  "transparent",
      borderColor: "transparent",
      borderWidth:0,
      displayErrors:true,
      style: {
        "fontFamily": "inter", "fontSize":"0px", 'position':'relative'
      }
    },
    title: { 
      text: this.better_than + 'bättre än 75% av Purply Demo',
      style: {"color": '#909090', 'fontSize': "12px"}
    },
    xAxis: [
      {
        crosshair: false,
        showLastLabel: false,
        labels: {
          enabled: false,
          ticks: false
      },
      minorTickLength: 0,
      tickLength: 0
      },
  
    ],
    yAxis: {
      min: 0,
      max: 100,
      lineWidth: 0,
      showLastLabel: false,
      labels: {
        format: '{value}%',
    },
    plotBands: [{
      color: '#dddddd', // Color value
      from: 0, // Start of the plot band
      to: 25, // End of the plot band
      labels: {
        format: '{value}%'
    },
    }, 
    {
    color: '#bbbbbb', // Color value
    from: 25, // Start of the plot band
    to: 75, // End of the plot band
    labels: {
      format: '{value}%'
  },
    },
    {
      color: '#888888', // Color value
      from: 75, // Start of the plot band
      to: 100, // End of the plot band
      labels: {
        format: '{value}%'
    },
      }
  ],
    },
    legend: {
      enabled: true,
      layout: 'vertical',
      floating: true,
      backgroundColor: '#FFFFFF',
      align: 'left',
      verticalAlign: 'top',
      y: 60,
      x: 100
    },
    credits: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        stacking: 'percentage',
      },
      area:{
  
      }
    },
    series: [
      {
        data:[
       { name: this.better_than + "täckningsbidrag",
        color:"#38063A",
        y: 75,
        labels: {
          format: '{value}%',
      },
        }
    ],
    showInLegend: false,
    borderWidth:0,
      }
    ],
    tooltip: {
      aniamtion: false,
      pointFormat: '{series.name}:  {point.y:.0f}%',
    },
    accessibility: {
      point: {
          valueDescriptionFormat: '{index}, {point.percentage:.0f}%'
      }
  },
  
    loading:{
      hideDuration:100,
      labelStyle:{"fontWeight": "bold", "position": "relative", "top": "45%"},
      style:{"position": "absolute", "backgroundColor": "#ffffff", "opacity": 0.5, "textAlign": "center"}
      }
  }
}

RenderChart2(){
  this.barchart2 = { 
    chart: {
      type: 'bar',
      scrollablePlotArea: {
        opacity: 1,
        minHeight: 30
      },
      height: 125,
      width: 1200,
      backgroundColor:  "transparent",
      borderColor: "transparent",
      borderWidth:0,
      displayErrors:true,
      style: {
        "fontFamily": "inter", "fontSize":"0px", 'position':'relative'
      }
    },
    title: { 
      text: this.better_than + 'bättre än 50% av index',
      style: {"color": '#909090', 'fontSize': "12px"}
    },
    xAxis: [
      {
        crosshair: false,
        showLastLabel: false,
        labels: {
          enabled: false,
          ticks: false
      },
      minorTickLength: 0,
      tickLength: 0
      },
  
    ],
    yAxis: {
      min: 0,
      max: 100,
      lineWidth: 0,
      showLastLabel: false,
      labels: {
        format: '{value}%',
    },
    plotBands: [{
      color: '#dddddd', // Color value
      from: 0, // Start of the plot band
      to: 25, // End of the plot band
      labels: {
        format: '{value}%'
    },
    }, 
    {
    color: '#bbbbbb', // Color value
    from: 25, // Start of the plot band
    to: 75, // End of the plot band
    labels: {
      format: '{value}%'
  },
    },
    {
      color: '#888888', // Color value
      from: 75, // Start of the plot band
      to: 100, // End of the plot band
      labels: {
        format: '{value}%'
    },
      }
  ],
    },
    legend: {
      enabled: true,
      layout: 'vertical',
      floating: true,
      backgroundColor: '#FFFFFF',
      align: 'left',
      verticalAlign: 'top',
      y: 60,
      x: 100
    },
    credits: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        stacking: 'percentage',
      },
      area:{
  
      }
    },
    series: [
      {
        data:[
       { name: this.better_than + "Genomförsäljning",
        color:"#38063A",
        y: 50,
        labels: {
          format: '{value}%',
      },
        }
    ],
    showInLegend: false,
    borderWidth:0,
      }
    ],
    tooltip: {
      aniamtion: false,
      pointFormat: '{series.name}:  {point.y:.0f}%',
    },
    accessibility: {
      point: {
          valueDescriptionFormat: '{index}, {point.percentage:.0f}%'
      }
  },
  
    loading:{
      hideDuration:100,
      labelStyle:{"fontWeight": "bold", "position": "relative", "top": "45%"},
      style:{"position": "absolute", "backgroundColor": "#ffffff", "opacity": 0.5, "textAlign": "center"}
      }
  }
}
}

//   RenderChart() {
//     const canvasBackgroundColor: any = {
//       id: "canvasBackgroundColor",
//       beforeDraw(chart: any, args: any, pluginOptions: any) {
//         const {
//           ctx,
//           chartArea: { top, bottom, left, right },
//           scales: { x, y },
//         } = chart;

//         function bgColors(bracketLow: any, bracketHigh: any, color: any) {
//           const width = right - left;
//           const leftPos = left;
//           ctx.fillStyle = color;
//           ctx.fillRect(
//             leftPos,
//             y.getPixelForValue(bracketHigh),
//             width,
//             y.getPixelForValue(bracketLow) - y.getPixelForValue(bracketHigh)
//           );
//           ctx.restore();
//         }

//         bgColors(14, 18, "rgba(255, 26, 104, 0.2)");
//         bgColors(4, 14, "rgba(255, 26, 104, 0.2)");
//         bgColors(4, 0, "rgba(255, 26, 104, 0.2)");
//       },
//     };

//     const myChart = new Chart("HorizontalBar", {
//       type: "bar",
//       data: {
//         labels: [""],
//         datasets: [
//           {
//             label: this.better_than + " 91% av Index",
//             data: [91],
//             borderWidth: 1,
//             backgroundColor: ["rgb(68, 84, 106)"],
//           },
//         ],
//       },
//       options: {
//         plugins: {
//           colors: {},
//           legend: {
//             labels: {
//               boxWidth: 0,
//             },
//           },
//         },
//         // }, canvasBackgroundColor],
//         indexAxis: "y",
//         scales: {
//           y: {
//             beginAtZero: true,
//             ticks: {
//               callback: function (val: any) {
//                 return val.toString() + "%";
//               },
//               display: true,
//             },
//           },
//           x: {
//             beginAtZero: true,
//             ticks: {
//               callback: function (val: any) {
//                 return val.toString() + "%";
//               },
//               display: true,
//             },
//           },
//         },
//       },
//     });
//   }

//   RenderChart2() {
//     const myChart = new Chart("HorizontalBar2", {
//       type: "bar",
//       data: {
//         labels: [""],
//         datasets: [
//           {
//             label: this.better_than + " 72% av Index",
//             data: [72, 100],
//             borderWidth: 1,
//             backgroundColor: ["rgb(68, 84, 106)"],
//           },
//         ],
//       },
//       options: {
//         plugins: {
//           legend: {
//             labels: {
//               boxWidth: 0,
//             },
//           },
//         },
//         indexAxis: "y",
//         scales: {
//           y: {
//             beginAtZero: true,
//             ticks: {
//               callback: function (val: any) {
//                 return val.toString() + "%";
//               },
//               display: true,
//             },
//           },
//           x: {
//             beginAtZero: true,
//             ticks: {
//               callback: function (val: any) {
//                 return val.toString() + "%";
//               },
//               display: true,
//             },
//           },
//         },
//       },
//     });
//   }

//   RenderChart3() {
//     const myChart = new Chart("HorizontalBar3", {
//       type: "bar",
//       data: {
//         labels: [""],
//         datasets: [
//           {
//             label: this.better_than + " 56% av Index",
//             data: [56, 100],
//             borderWidth: 1,
//             backgroundColor: ["rgb(68, 84, 106)"],
//           },
//         ],
//       },
//       options: {
//         plugins: {
//           legend: {
//             labels: {
//               boxWidth: 0,
//             },
//           },
//         },
//         indexAxis: "y",
//         scales: {
//           y: {
//             beginAtZero: true,
//             ticks: {
//               callback: function (val: any) {
//                 return val.toString() + "%";
//               },
//               display: true,
//             },
//           },
//           x: {
//             beginAtZero: true,
//             ticks: {
//               callback: function (val: any) {
//                 return val.toString() + "%";
//               },
//               display: true,
//             },
//           },
//         },
//       },
//     });
//   }
// }
