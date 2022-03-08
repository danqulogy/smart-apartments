import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {propertiesReducer} from "./state/properties.reducer";
import { PropertiesListComponent } from './properties-list/properties-list.component';
import {RouterModule, Routes} from "@angular/router";
import {MapComponent} from "./properties-list/map/map.component";
import {HttpClientModule} from "@angular/common/http";

const routes: Routes = [
  {
    path: '',
    component: PropertiesListComponent
  }
]

@NgModule({
  declarations: [
    PropertiesListComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('properties', propertiesReducer),

  ]
})
export class PropertiesModule { }
