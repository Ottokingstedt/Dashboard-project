import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService } from './core/services/theme.service';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ThemePalette } from '@angular/material/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
user?: User | null;
color: ThemePalette = 'primary';
mode: ProgressSpinnerMode = 'determinate';
value = 100;

  isDarkTheme!: Observable<boolean>;

  constructor(
    private themeService: ThemeService,
    private  router: Router,
    private location: Location
    ){

     }


  ngOnInit(): void {
    this.isDarkTheme = this.themeService.isDarkTheme;
    const path = this.location.path();
    if(path && path.indexOf('#') > -1){
      const fragment = path.substring(path.indexOf('#') + 1);
      this.router.navigate([fragment])
    }
  }

  title = 'Purply';
}
