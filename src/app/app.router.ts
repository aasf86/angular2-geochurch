import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { CrudComponent } from './crud/crud.component';
import { LoginComponent } from './login/login.component';

const AppRoutes:Routes = [
    { path: 'crud', component: CrudComponent },
    { path: 'crud/:id', component: CrudComponent },
    { path: 'login', component: LoginComponent },    
    { path: 'home', component: CrudComponent },
    { path: '', component: CrudComponent }
];

export const AppRouterModule:ModuleWithProviders = RouterModule.forRoot(AppRoutes);