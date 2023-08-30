import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component, Injectable, OnInit } from "@angular/core";
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.scss"],
})
@Injectable({
  providedIn: "root",
})
export class TestComponent implements OnInit {
  abouts: any | string[] = [];
  selectedLanguage: string | any;

  constructor(private http: HttpClient ) {
    this.selectedLanguage = localStorage.getItem('selectedLanguage') || 'sv-SE'; // Load the previously saved language preference, default to English
    this.languageSwitch();
  }

  languageSwitch() {
    const apiUrl = `http://localhost:1337/abouts?_sort=id&_locale=${this.selectedLanguage}`;
    this.http.get(apiUrl).subscribe((data: any) => {
      this.abouts = data;
    });
  }

  ngOnInit() {
    // let headers = new HttpHeaders({
    //  'PURPLY_KEY' : '3wX4rv7Mds6vvnKisCrDV2PYv9x1B9sF4Ok3hsMc',
    //   'grundURL': 'https://xq56sjann7.execute-api.eu-north-1.amazonaws.com/prod/'
    // });

    let headers = new HttpHeaders({
      "x-api-key": "hbF7spsrlb6dIhjw7V12k70ljkKASaTI80UlMXMj",
    });

    this.http
      .get<any>(
        "https://xq56sjann7.execute-api.eu-north-1.amazonaws.com/prod/users/",
        {
          headers: headers,
        }
      )
      .subscribe((data) => {});


/*     this.http.get("http://localhost:1337/abouts?_sort=id").subscribe((data: any) => {
      console.log(data);
      this.about = data;
      this.markdownText = data.map((item: { description: any; }) => item.description).join('\n\n');
    }); */
  }

  onSubmit(): void {

  }
}