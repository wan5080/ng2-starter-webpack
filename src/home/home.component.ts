import { Component, OnInit } from '@angular/core';

@Component({
    selector: '<home-root>',
    template:`
        <h1>This is Home page!</h1>   
    `
})
export class HomeComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}