import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ShareRoutingModule } from './share.routing';

//Share Module Members
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
    imports: [
        BrowserModule, 
        ShareRoutingModule,
    ],
    exports: [NavbarComponent],
    declarations: [NavbarComponent],
    providers: [],
})
export class ShareModule { }
