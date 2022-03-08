import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs";

@Component({
  selector: 'app-properties-list',
  templateUrl: './properties-list.component.html',
  styleUrls: ['./properties-list.component.scss']
})
export class PropertiesListComponent implements OnInit {

  propertyList$ = this.getProperties().pipe(
    tap(data => console.log('property list', data))
  )

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

  getProperties(){
    return this.http.get<PropertyListDto>('https://app.smartapartmentdata.com/List/json/listItems.aspx?listID=5363950&token=5AE7DFB40500DDC03BC84BD3F0A8AC0F18784B1E&receipt=undefined')
  }
}



export interface AgentInfo{
  accountID: number
  firstname: string
  lastname: string
  company: string
  splashMessage: string
  customHeader: string
}

export interface PropertyRecord{
  listID: number
  order: number
  propertyID: number
  name: string
  streetAddress: string
  city: string
  state: string
  pets: boolean
  washerDry: string
  photo: string
  favorite: boolean
  highestSentCommissions: boolean
  onsiteManager: string
  management: string
  proximity: number
  section8: boolean
  seniorHousing: boolean
  studentHousting: boolean
  floorPlans: any[]
  paidUtilities: any[]
  geocode: any[]
  highValueAmenities: string[]
}

export interface PropertyListDto {
  agentInfo: AgentInfo
  records: PropertyRecord[]
  showContactInfo: boolean
  role: string
  title: string
  body: string
}
