import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'account-detail',
    templateUrl: './account-detail.component.html'
})
export class AccountDetailComponent {

    constructor(private router: Router) {

    }

    navigateToDetail(user) {
        this.router.navigate(["account"]);
    }

}