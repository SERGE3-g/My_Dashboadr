import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailRowService } from '@syncfusion/ej2-angular-grids';

import { GridModule } from '@syncfusion/ej2-angular-grids';
import { DataSourceComponent } from './data-source/data-source.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { UserComponent } from './user/user.component';
import { MessageComponent } from './message/message.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { FileManagerComponent } from './file-manager/file-manager.component';
import { OrderComponent } from './order/order.component';
import { SettingComponent } from './setting/setting.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { LoginComponent } from './login/login.component';
import { LogOutComponent } from './log-out/log-out.component';
  @NgModule({
    imports: [
        BrowserModule,
        GridModule
    ],
    declarations: [AppComponent, DataSourceComponent, DashboardComponent, HomeComponent, SearchComponent, UserComponent, MessageComponent, AnalyticsComponent, FileManagerComponent, OrderComponent, SettingComponent, ProfileComponent, ProfileDetailComponent, LoginComponent, LogOutComponent],
    bootstrap: [AppComponent],
    providers: [DetailRowService]
})
export class AppModule { }
