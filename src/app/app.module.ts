import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailRowService } from '@syncfusion/ej2-angular-grids';

import { GridModule } from '@syncfusion/ej2-angular-grids';
import { DataSourceComponent } from './data-source/data-source.component';
  @NgModule({
    imports: [
        BrowserModule,
        GridModule
    ],
    declarations: [AppComponent, DataSourceComponent],
    bootstrap: [AppComponent],
    providers: [DetailRowService]
})
export class AppModule { }
