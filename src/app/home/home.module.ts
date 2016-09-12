import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeRoutingModule } from './home.routing.ts';
import { HomeComponent }   from './home.component';

@NgModule({
    imports: [
        BrowserModule,
        HomeRoutingModule
    ],
    exports: [],
    declarations: [HomeComponent],
    providers: [],
})
export class HomeModule { }
