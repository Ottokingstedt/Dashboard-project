import { Component} from '@angular/core';
import {  Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent{
  events = []; 
  showNavSide? = true;

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
      title: 'Basanalys',
      icon: 'bar_chart',
      path: './base-analysis',
      menuItem: [],
    },
    {
      title: 'Artikel',
      icon: 'view_compact',
      path: './brands',
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

  constructor(
    private breakpointObserver: BreakpointObserver, 
    ){
  }


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
      );

}
 
