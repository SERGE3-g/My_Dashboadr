import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { FileManagerComponent } from './file-manager/file-manager.component';
import { MessageComponent } from './message/message.component';
import { LoginComponent } from './login/login.component';
import { LogOutComponent } from './log-out/log-out.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
{path: 'home',component: HomeComponent},
{path:'dashboard',component:DashboardComponent},
{path:'analytics',component:AnalyticsComponent},
{path:'file-manager',component:FileManagerComponent},
{path:'message',component:MessageComponent},
{path:'login',component:LoginComponent},
{path:'log-out',component:LogOutComponent},
{path:'order',component:OrderComponent},


{path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
