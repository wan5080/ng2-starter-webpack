//Angular Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

//Custom Modules
import { AppRoutingModule } from './app.routing'; 
import { ShareModule } from '../share/share.module';
import { HomeModule } from '../home/home.module';

//App Module Members
import { AppComponent } from './app.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { AboutComponent } from './about/about.component';

const components: any[] = [AppComponent, MainContainerComponent, AboutComponent];
const directives:any[] = [];
const pipes:any[] = [];

const angularModules: any[] = [BrowserModule, HttpModule];
const customModules: any[] = [ShareModule, HomeModule];
const thirdPartyModules: any[] = [];

@NgModule({
    imports: [
        ...angularModules,
        ...customModules,
        ...thirdPartyModules,
        AppRoutingModule
    ],
    declarations: [
        ...components,
        ...directives,
        ...pipes
    ],
    providers: [

    ],
    bootstrap: [AppComponent],
})
export class AppModule { }

