import { Routes } from '@angular/router';
import { LoginComponent } from './Admin/login/login.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { AuthguardService } from './shared/services/Authguard/authguard.service';
import { MainComponent } from './Admin/core/main/main.component';
import { TestnomialComponent } from './Admin/testnomial/testnomial.component';
import { NotableTransactionComponent } from './Admin/notable-transaction/notable-transaction.component';
import { NighborhoodsComponent } from './Admin/nighborhoods/nighborhoods.component';
import { ApplicationComponent } from './Admin/application/application.component';

export const routes: Routes = [

    { path: 'admin', component: MainComponent, children: [
        { path: 'dashboard', component: DashboardComponent,canActivate: [AuthguardService],
            children:[
                { path:'testnomial', component: TestnomialComponent },
                { path:'notable-transaction', component: NotableTransactionComponent },
                { path:'nighborhoods', component: NighborhoodsComponent },
                { path:'application', component: ApplicationComponent },
                { path:'', redirectTo:'testnomial', pathMatch:"full" }
            ]
        },
        { path:'', redirectTo:'dashboard', pathMatch:"full" }
    ]},
    { path:'login', component:LoginComponent },
    { path:'', redirectTo:'login', pathMatch:"full" }


];
