import { Component } from "@angular/core";
import { DataService } from '../services/CmsDataService';


@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent {
  abouts: any | string[] = [];
  selectedLanguage: string | any;

  constructor(private dataService: DataService ) {
    this.selectedLanguage = localStorage.getItem('selectedLanguage') || 'sv-SE';
    this.languageSwitch();
  }

  async languageSwitch() {
    (await this.dataService.getCMSData('abouts', this.selectedLanguage)).subscribe((data: any) => {
      console.log(this.abouts)
      for(let info_about of data.data) {
        if(!info_about.attributes.key.startsWith("info_")){
          this.abouts.push(info_about);
          console.log(this.abouts)
        } else {
          this.abouts.push(info_about)
        }
      }
    });
  }

}
