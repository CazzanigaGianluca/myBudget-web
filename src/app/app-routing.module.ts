import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { DashboardPageComponent } from './components/dashboard-page/dashboard-page.component';
import { AuthGuard } from './guards/auth.guard';
import { CategoriesPageComponent } from './components/categories-page/categories-page.component';
import { CategoryDetailPageComponent } from './components/category-detail-page/category-detail-page.component';


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginPageComponent},
  {path: 'dashboard', component: DashboardPageComponent, canActivate: [AuthGuard]},
  {path: 'categories', component: CategoriesPageComponent, canActivate: [AuthGuard]},
  {path: 'categories/:id', component: CategoryDetailPageComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
