import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { AccountListComponent } from './components/account/account-list/account-list.component';
import { AccountSummaryComponent } from './components/account/account-summary/account-summary.component';
import { AccountDetailComponent } from './components/account/account-detail/account-detail.component';
import { HeaderComponent } from './components/shared/header/header.component';

export const sharedConfig: NgModule = {
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        AccountDetailComponent,
        AccountListComponent,
        AccountSummaryComponent,
        HomeComponent,
        HeaderComponent
    ],
    imports: [

        RouterModule.forRoot([
            { path: '', redirectTo: 'account', pathMatch: 'full' },
            { path: 'account', component: AccountListComponent },
            { path: 'detail/:id', component: AccountDetailComponent },
            { path: 'summary', component: AccountSummaryComponent },
            { path: '**', redirectTo: 'account' }
        ])
    ]
};
