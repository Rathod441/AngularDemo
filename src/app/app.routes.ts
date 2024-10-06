import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { authGuard } from './service/auth.guard';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'forgot-password',
        component:ForgotPasswordComponent
    },
    {
        path:'admin',
        component:AdminComponent,
        children:[
            {
                path:'',
                component:DashboardComponent
            }
            ,
            {
                path:'dashboard',
                component:DashboardComponent,
                canActivate:[authGuard]
            }
        ]
    }
];
