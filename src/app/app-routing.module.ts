import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignupComponent } from './signup/signup.component';
import { SalesforecastComponent } from './salesforecast/salesforecast.component';
import { ForecastResultsComponent } from './forecast-results/forecast-results.component';
import { GraphComponent } from './graph/graph.component';


const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'salesforecast',component:SalesforecastComponent},
  {path:'forecast-results',component:ForecastResultsComponent},
  {path:'home',component:HomeComponent},
  {path:'graph', component:GraphComponent},
  {path:'**',component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
