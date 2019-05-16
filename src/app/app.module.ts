// @Angular Module Imports


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CountToModule } from 'angular-count-to';
import { NgxInfiniteScrollerModule } from 'ngx-infinite-scroller';
import { HttpClientModule } from '@angular/common/http';
// import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { InfiniteScrollModule } from '@thisissoon/angular-infinite-scroll';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { FlxUiDatatableModule, FlxUiDataTable } from 'flx-ui-datatable' ;

// Custom npm plugins imports
import { ChartsModule } from 'ng2-charts';
// import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgxEasypiechartModule } from 'ngx-easypiechart';
import { EasyPieChartModule } from 'ng2modules-easypiechart';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgressBarModule } from 'angular-progress-bar';
import {DataTableModule} from 'angular-6-datatable';
import { DoughnutChartComponent, PieChartComponent, BarChartComponent } from 'angular-d3-charts';

// Custom component imports


// import { FilterPipe } from ' ./filter/filter.pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2OrderModule } from 'ng2-order-pipe';

import {SlideshowModule} from 'ng-simple-slideshow';
import { OwlModule } from 'ngx-owl-carousel';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { MyDatePickerModule } from 'mydatepicker';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgSelect2Module } from 'ng-select2';
import { HomeComponent } from './home/home.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};


// @angularcomponent, custom component && plugins

// import and export

@NgModule({
  declarations: [
    AppComponent,
    DoughnutChartComponent,
    PieChartComponent,
    BarChartComponent,
    HomeComponent
  ],
  imports: [
    NgSelect2Module,
    NgSelectModule,
    FlxUiDatatableModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxEasypiechartModule,
    EasyPieChartModule,
    ProgressBarModule,
    NgMultiSelectDropDownModule.forRoot(),
    CountToModule,
    ChartsModule,
    NgxInfiniteScrollerModule,
    HttpClientModule,
    InfiniteScrollModule,
    NgScrollbarModule,
    NgxDatatableModule,
    DataTableModule,
    NgxPaginationModule,
    Ng2OrderModule,
    SlideshowModule,
    OwlModule,
    PerfectScrollbarModule,
    MyDatePickerModule,
    SelectDropDownModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger'
    })
  ],
  providers: [{
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  },
FlxUiDataTable ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// platformBrowserDynamic().bootstrapModule(AppModule);
