import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'account-list',
    templateUrl: './account-list.component.html'
})
export class AccountListComponent {

    //onInit
    constructor(private router: Router) {
        console.log("Hello list")
    
    }

    users = [
        { id: '1', firstname: "Sam", lastname: "Hurst", email: 'apple@aol.com' },
        { id: '2', firstname: "Tom", lastname: "Bacon", email: 'banana@hotmail.com' },
        { id: '3', firstname: "Cindy", lastname: "Loren", email: 'orange@gmail.com' }
    ];

    navigateToDetail(user) {
        this.router.navigate(["detail", { id: user.id }]);
    }
}
