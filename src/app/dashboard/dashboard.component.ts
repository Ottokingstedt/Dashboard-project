import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { CurrencyService } from "../services/currency.service";
import { CurrencyComponent } from "../currency/currency.component";
import { AuthService } from "src/auth/auth.service";
import { DataService } from "../services/CmsDataService";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  template: `{{ currency }}`,
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  @ViewChild(CurrencyComponent) selectedCurrency!: string | number;
  @Input() base? = "EUR";
  @Input() currapi?: any = [];
  @Input() result?: number = 1;

  info: any | string[] = [];
  selectedLanguage: string | any;
  sales_period: string | any;
  currentWeek: number;
  today: Date;
  sixMonthsAgo: Date;
  events = [];

   ngOnInit() : void {
    // if(await this.authService.isLoggedIn()){
    //   console.log('Successfully logged in', this.authService.getToken());
    // }
    this.selectedLanguage = localStorage.getItem("selectedLanguage") || "sv-SE";
    this.languageSwitch();
    this.currencyService.selectedCurrency.subscribe((currency) => {
      this.base = currency;
    });
  }

  constructor(
    private router: Router,
    private currencyService: CurrencyService,
    private dataService: DataService,
    public authService: AuthService
  ) {
    this.today = new Date();
    this.sixMonthsAgo = new Date();
    this.sixMonthsAgo.setMonth(this.sixMonthsAgo.getMonth() - 6);
    this.currentWeek = this.getWeekNumber(new Date());
  }

  async languageSwitch() {
    (
      await this.dataService.getCMSData("oeversikts", this.selectedLanguage)
    ).subscribe((data: any) => {
      for (let dataLoop of data.data) {
        this.info.push(dataLoop.attributes);
      }

      for (let salesPeriod of this.info) {
        if (salesPeriod.Title == "overview_sales_period") {
          this.sales_period = salesPeriod.description;
        }
      }
    });
  }

  getWeekNumber(date: Date): number {
    const d = new Date(
      Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
    );

    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));

    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));

    const weekNo = Math.ceil(
      ((d.valueOf() - yearStart.valueOf()) / 86400000 + 1) / 7
    );
    return weekNo;
  }

  onSelect(event: any) {
    console.log(event);
    console.log("Item clicked", JSON.parse(JSON.stringify(event)));
  }

  onActivate(data: any): void {
    console.log("Activate", JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log("Deactivate", JSON.parse(JSON.stringify(data)));
  }
}
