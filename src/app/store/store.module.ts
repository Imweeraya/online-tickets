import { NgModule } from "@angular/core";

import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { HomeComponent } from "./home.component";
import { ModelModule } from "../model/model.module";

@NgModule({ 
    declarations: [
        HomeComponent
    ],

    imports: [ 
        ModelModule, 
        BrowserModule, 
        FormsModule, 
        RouterModule,
    ],

    exports: [
        HomeComponent
    ]
 
})
export class StoreModule {}
