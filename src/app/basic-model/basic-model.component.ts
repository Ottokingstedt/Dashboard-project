import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Revenue_data } from "./revenue/revenue.component";
import { environment } from "src/enivronments/enviroment";
import { DataService } from "../services/CmsDataService";
/* import theme from 'highcharts/themes/dark-unica';
import * as Highcharts from "highcharts";
theme(Highcharts); */

@Component({
  selector: "app-basic-model",
  templateUrl: "./basic-model.component.html",
  styleUrls: ["./basic-model.component.scss"],
})
export class BasicModelComponent {
  selectForm!: FormGroup;

  Butik = "";
  Index = "";
  selected = "";
  Butiks: string[] = [];
  Riktmarke: string[] = [];
  categorieList: string[] = [];
  brandList: string[] = [];
  tabData: any | string[] = [];
  filterData: any | string[] = [];
  displayFilterData: any | string[] = [];
  sendingInfo: any | string[] = [];
  departmentsCms: any | string[] = [];
  categoriesCms: any | string[] = [];
  selectedLanguage: string | any;

  categories = new FormControl("");
  brands = new FormControl("");
  departments = new FormControl("");

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  departmentList: string[] = ["Woman", "Man", "Kids", "Other", "Unassigned"];

  isPreviusToggled = false;
  isComingToggled = false;
  isBasicToggled = false;
  isCategoriesToggled = true;
  isBrandsToggled = false;

  constructor(private http: HttpClient, private dataService: DataService) {
    this.selectedLanguage = localStorage.getItem("selectedLanguage") || "en";
    this.languageSwitch();
  }

  async languageSwitch() {
    (await this.dataService
      .getCMSData("basic-models", this.selectedLanguage))
      .subscribe((data: any) => {
        for (let info_data of data.data) {
          if (!info_data.attributes.key.startsWith("filter_")) {
            this.tabData.push(info_data);
          } else {
            this.filterData.push(info_data);
          }
        }
        this.sendingInfo = data;
      });

    (await this.dataService
      .getCMSData("departments", this.selectedLanguage))
      .subscribe((data: any) => {
        this.departmentsCms = data.data;
      });

    (await this.dataService
      .getCMSData("categories", this.selectedLanguage))
      .subscribe((data: any) => {
        this.categoriesCms = data.data;
      });
  }

  /* exempel kod för att se vart du kan hämta input data */
  getButik() {
    console.log(this.Butik);
  }
  getDateRange() {
    console.log(this.range.value);
  }
  getDepartment() {
    console.log(this.departments.value);
  }
  getCategoriesLog() {
    console.log(this.categories.value);
  }
  getBrandsLog() {
    console.log(this.brands.value);
  }
  /* --- */

  /* Button toogle checks */
  onPreviusChecked(event: any) {
    this.isPreviusToggled = !this.isPreviusToggled;
    console.log(event.value);
  }
  onComingChecked(event: any) {
    this.isComingToggled = !this.isComingToggled;
    console.log(event.value);
  }
  onBasicChecked(event: any) {
    this.isBasicToggled = !this.isBasicToggled;
    console.log(event.value);
  }
  onCategoriesChecked() {
    if (!this.isCategoriesToggled) {
      this.isCategoriesToggled = !this.isCategoriesToggled;
      this.isBrandsToggled = false;
      console.log("Categoris is " + this.isCategoriesToggled);
      console.log("Brands is " + this.isBrandsToggled);
    }
  }
  onBrandsChecked() {
    if (!this.isBrandsToggled) {
      this.isBrandsToggled = !this.isBrandsToggled;
      this.isCategoriesToggled = false;
      console.log("Categories is " + this.isCategoriesToggled);
      console.log("Brands is " + this.isBrandsToggled);
    }
  }
  getCategories() {
    for (let entry of Revenue_data) {
      this.categorieList.push(entry.Grouping);
    }
  }
  /* ---- */

  ngOnInit() {
    this.fetchLoaction();
    this.getCategories();
    this.fetchBrands();
  }

  /* dynamic fetch from localstorage client_id? */
  private fetchLoaction() {
    if (
      !localStorage.getItem("butik_index") &&
      !localStorage.getItem("riktmarke_index")
    ) {
      const client_Id = 1;
      const URL =
        "https://xq56sjann7.execute-api.eu-north-1.amazonaws.com/prod/moduleselections/?client_id=" +
        client_Id;
      const headers = new HttpHeaders({
        "x-api-key": environment.apiKey,
      });
      this.http
        .get(URL, {
          headers: headers,
        })
        .subscribe((data: any) => {
          for (let locations of data) {
            if (locations.module_id === 3) {
              for (let location of locations.locations) {
                this.Butiks.push(location.name);
                localStorage.setItem(
                  "butik_index",
                  JSON.stringify(this.Butiks)
                );
              }
              for (let index of locations.location_indexes) {
                this.Riktmarke.push(index.name);
                localStorage.setItem(
                  "riktmarke_index",
                  JSON.stringify(this.Riktmarke)
                );
              }
            }
            if (locations.module_id === 1) {
            }
          }
        });
    } else {
      const butik_index = JSON.parse(localStorage.getItem("butik_index")!);
      const indexes = JSON.parse(localStorage.getItem("riktmarke_index")!);
      for (let locations of butik_index) {
        this.Butiks.push(locations);
      }
      for (let index of indexes) {
        this.Riktmarke.push(index);
      }
    }
  }
  /* fetching brands for the filter */
  private fetchBrands() {
    if (!localStorage.getItem("brand_index")) {
      const URL =
        "https://xq56sjann7.execute-api.eu-north-1.amazonaws.com/prod/";
      const headers = new HttpHeaders({
        Accept: "application/json",
        "x-api-key": environment.apiKey,
      });
      this.http
        .get(URL + "brands/", {
          headers: headers,
        })
        .subscribe((data: any) => {
          for (let brand of data) {
            this.brandList.push(brand.name);
            localStorage.setItem("brand_index", JSON.stringify(this.brandList));
          }
        });
    } else {
      const brand_index = JSON.parse(localStorage.getItem("brand_index")!);
      for (let brand of brand_index) {
        this.brandList.push(brand);
      }
    }
  }

  reflowChart(): void {
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 250);
  }
}
