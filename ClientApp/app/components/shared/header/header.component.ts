﻿import { Component } from '@angular/core';

@Component({
    selector: 'shared-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    name: string;

    constructor() {
        this.name = 'Sam';
    }
}
