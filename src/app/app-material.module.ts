import { NgModule } from "@angular/core";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card'
import { FormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list'
import { RouterTestingModule } from "@angular/router/testing";
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { HttpClientModule } from '@angular/common/http';
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu'
import { MatTableModule } from '@angular/material/table'
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { HighchartsChartModule } from 'highcharts-angular';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
    exports:[
        MatButtonModule, 
        MatFormFieldModule, 
        MatCardModule, 
        FormsModule,
        LayoutModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        RouterTestingModule,
        HttpClientModule,
        MatSlideToggleModule,
        MatTabsModule,
        MatProgressSpinnerModule,
        MatGridListModule,
        MatTooltipModule,
        MatMenuModule,
        MatTableModule,
        MatInputModule,
        MatSelectModule,
        MatSortModule,
        MatPaginatorModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatButtonToggleModule,
        HighchartsChartModule,
        MatExpansionModule
    ]
})
export class AppMaterialModule{}