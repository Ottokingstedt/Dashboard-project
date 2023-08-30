import { NgModule, LOCALE_ID } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgOptimizedImage, registerLocaleData } from "@angular/common";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from "@angular/forms";import { DashboardComponent } from "./dashboard/dashboard.component" 
import { NavComponent } from "./nav/nav.component";
import { HttpClient } from "@angular/common/http";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AboutComponent } from "./about/about.component";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
//import { ErrorInterceptor } from "./helpers/error.interceptor";
import { CurrencyPipe } from "@angular/common";
import { LoadingInterceptor } from "src/interceptor/loading.interceptor";
import localeSe from "@angular/common/locales/se";
import { AppRoutingModule } from "./app-routing.module";
import { HorizontalBarComponent } from "./dashboard/horizontal-bar/horizontal-bar.component";
import { RevenueComponent } from "./basic-model/revenue/revenue.component";
import { CurrencyComponent } from "./currency/currency.component";
import { AnimationComponent } from "./animation/animation.component";
import { TestComponent } from "./test/test.component";
import { BasicModelComponent } from "./basic-model/basic-model.component";
import { HighchartsChartModule } from "highcharts-angular";
import { MarkdownModule } from "ngx-markdown";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { BrandsComponent } from "./brands/brands.component";
import { SidenavComponent } from "./sidenav/sidenav.component";
import { ApiTestComponent } from "./api-test/api-test.component";
import { AppMaterialModule } from "./app-material.module";
import { AuthModule } from "src/auth/auth.module";
import { RouterModule } from '@angular/router';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

registerLocaleData(localeSe); // register locale data

@NgModule({
  declarations: [
    SidenavComponent,
    AppComponent,
    DashboardComponent,
    NavComponent,
    PageNotFoundComponent,
    BasicModelComponent,
    AboutComponent,
    HorizontalBarComponent,
    RevenueComponent,
    TestComponent,
    CurrencyComponent,
    AnimationComponent,
    BrandsComponent,
    ApiTestComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CurrencyPipe,
    HighchartsChartModule,
    MarkdownModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }), 
    NgOptimizedImage,
    AppRoutingModule,
    AppMaterialModule,
    AuthModule,
    RouterModule.forRoot([], {useHash: true})
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "se" },
    //{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
   // {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
