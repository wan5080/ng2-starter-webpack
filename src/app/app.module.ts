//Angular Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

//Feature Modules
import { AppRoutingModule } from './app.routing'; 
import { ShareModule } from './share/share.module';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';

//App Module Members
import { AppComponent } from './app.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { HeaderComponent } from './header/header.component';

const components: any[] = [AppComponent, MainContainerComponent, HeaderComponent];
const directives:any[] = [];
const pipes:any[] = [];

const angularModules: any[] = [BrowserModule, HttpModule];
const featureModules: any[] = [ShareModule, HomeModule, AboutModule];
const thirdPartyModules: any[] = [];

@NgModule({
    imports: [
        ...angularModules,
        ...featureModules,
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

