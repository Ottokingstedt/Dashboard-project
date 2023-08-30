import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ThemeService } from '../core/services/theme.service';
import { CurrencyService } from '../services/currency.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/auth/auth.service';
import { MatSlideToggle } from '@angular/material/slide-toggle';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit{
  selectedLanguage: string | any; 
    languages = [
    { code: 'en', label: 'English' },
    { code: 'sv-SE', label: 'Svenska' },
    { code: 'fi-FI', label: 'Finnish' },
  ];

  @Output() selectedCurrency: string = this.currencyService.currencyCode
  private darkThemeIcon = 'dark_mode'
  private lightThemeIcon = 'sunny'
  public lightDarkToggleIcon = this.lightThemeIcon!;

  onCurrencyChange(newCurrency: string) {
    this.currencyService.currencyCode = newCurrency;
    this.selectedCurrency = newCurrency; // Update the selected currency
    console.log(this.selectedCurrency)
  }


events = []; 


protected user?: any = {}

greeting: string;

isDarkTheme!: Observable<boolean>;

  ngOnInit() : void {
    this.isDarkTheme = this.themeService.isDarkTheme
    this.selectedCurrency = this.currencyService.currencyCode;
  }

  public doToggleLightDark(toggle: MatSlideToggle){
    this.lightDarkToggleIcon = toggle.checked ? this.darkThemeIcon : this.lightThemeIcon;
  }
  
  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }

  public menus = 
  [
    { title: 'Översikt', 
      icon: 'visibility',
      path: './dashboard',
      menuItem: [],
    }, 
    {
      title: 'Grundmodul',
      icon: 'align_horizontal_left',
      path: './basic-model',
      menuItem: [],
    }, 
    {
      title: 'Om',
      icon: 'info',
      path: './about',
      menuItem: [],
    },
    {
      title: 'Test',
      icon: 'support',
      path: './test',
      menuItem: [],
    }
  ];


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver, 
    private themeService: ThemeService,
    private router: Router,
    private currencyService: CurrencyService,
    private authService: AuthService
    ){
    const currentHour = new Date().getHours();
    if (currentHour >= 5 && currentHour < 12){
      this.greeting = "Godmorgon";
    } else if (currentHour >= 12 && currentHour < 18){
      this.greeting = "God eftermiddag";
    } else {
      this.greeting = "God kväll"
    }
    
    this.authService.loadUserProfile().then(user => {
      this.user = user;
      console.log(user)
    })
   

    this.selectedCurrency = currencyService.currencyCode;

    this.selectedLanguage = localStorage.getItem('selectedLanguage') || 'sv-SE';
  }

  
  logout(){
    this.authService.logout();
   }

   updateLanguage() {
    this.selectedLanguage = localStorage.setItem('selectedLanguage', this.selectedLanguage)
    location.reload();
  }
}
