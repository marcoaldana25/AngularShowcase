import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const homeRoutes: Route[] = [{
  path: '',
  component: HomeComponent
}]

@NgModule({
  declarations: [
    HomeComponent,
    UserProfileComponent
  ],
  imports: [
    RouterModule.forChild(homeRoutes),
    CommonModule
  ]
})
export class HomeModule { }
