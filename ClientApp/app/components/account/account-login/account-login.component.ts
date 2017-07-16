import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'account-login',
    templateUrl: './account-login.component.html',
    styleUrls: ['./account-login.component.css']
})
export class AccountLoginComponent {

    constructor(private router: Router) {

    }

    navigateToDetail() {
        this.router.navigate(["account"])
    }

    navigateToList() {
        this.router.navigate(["account"])
    }

}