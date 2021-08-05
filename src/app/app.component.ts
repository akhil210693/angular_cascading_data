import { Component } from '@angular/core';
import { Cs } from './cs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dropdowns';
  topicHasError=true;
  countryList: Array<any> = [
    { name: 'Germany', cities: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'] },
    { name: 'Spain', cities: ['Barcelona'] },
    { name: 'USA', cities: ['Downers Grove','newyork','california'] },
    { name: 'Mexico', cities: ['Puebla','mexico city'] },
    { name: 'China', cities: ['Beijing'] },
  ];
  model= new Cs('','');
  cities: Array<any>;
  changeCountry(count) {
    if(count =="0"){
      this.topicHasError=true; 
    }
    else{
      this.topicHasError=false;
    this.cities = this.countryList.find(country => country.name == count).cities;
    }
  }
  onsubmit(){
    
    console.log("Country: "+ this.model.country);
    console.log("State: "+ this.model.state);
    this.model= new Cs('','');
   
  }
}
