
import { Component, ElementRef, OnInit, SimpleChanges, ViewChild, ɵɵpureFunction1, ɵɵpureFunction2 } from '@angular/core';  
import { GoogleChartComponent } from 'angular-google-charts'; 
import {  jsonfile } from './charts';
import { chartsservice } from './charts.service';
import db from '../app/db.json';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  jsonfile1=[{"Date_YMD": "2020-03-14", "States": "Andaman and Nicobar Islands", "Confirmed": 0, "Recovered": 0, "Deceased": 0, "ICMR_RTPCR": 0.0, "Vaccine_Doses_administered": 0}, {"Date_YMD": "2020-03-14", "States": "Andhra Pradesh", "Confirmed": 1, "Recovered": 0, "Deceased": 0, "ICMR_RTPCR": 0.0, "Vaccine_Doses_administered": 0}];
  a:string;
  b:number;
  c:number;
  d:number;
  file=[];
  file1=[];
  file2=[]
  title:string;
  type:string;
  data=[];
  columnNames: any;
  options:any;
  width:number;
  height:number;
  title1:string;
  type1:string;
  data1=[];
  options1:any;
  title2:string;
  type2:string;
  data2=[];
  jsonn:any;
  options2:any;
  selectedDay: string = "Andaman and Nicobar Islands";
  start:string="2020-03-12";
  end:string="2021-02-22";
  date:Date;
  dt=[];
  date1:Date;
  get startdate():string{
 
    return this.start;
    
  }
  set enddate(value:string)
  {
    this.end=value;
    

  }
  get enddate():string{
 
    return this.end;
    
  }
  set startdate(value:string)
  {
    this.start=value;
    

  }


  //event handler for the select element's change event
  selectChangeHandler (event: any) {
    //update the ui

    this.selectedDay = event.target.value; 
    this.file=[];
    this.file1=[];
    this.file2=[];
    this.fun();
    console.log(this.jsonfile1);
  }
  selectChanger(){
    this.file=[];
    this.file1=[];
    this.file2=[];
    this.fun();
  }
 
  fun()

 {
  let date: Date = new Date(this.start);  
  let date1: Date =new Date(this.end);

  
  
  for(let index=0;index<this.jsonfile1.length;index++)
{
  
  let date3:Date=new Date(this.jsonfile1[index].Date_YMD);
  

  
  if(this.jsonfile1[index].States==this.selectedDay && (date.getTime()<date3.getTime()) &&(date3.getTime()<date1.getTime()) )
  {
    
  this.a=this.jsonfile1[index].Date_YMD;
  this.b=+this.jsonfile1[index].Confirmed;
  this.c=+this.jsonfile1[index].Recovered;
  this.d=+this.jsonfile1[index].ICMR_RTPCR;
 
  this.file.push([this.a,this.b]);
  
  this.fun2(); 

  this.file1.push([this.a,this.c])
  
  this.fun3();
  this.file2.push([this.a,this.d])
  this.fun4()
}
 }
  }
  fun2()
  {
    this.title = 'Confirmed';  
    this.type = 'LineChart';  
    this.data = this.file; 
   
    this.options = {   
      colors: ['red'], 
      is3D: true,
      curveType: 'function',
      };   
    this.width = 900;  
    this.height = 500;  
  }
  fun3()
  {
    this.title1 = 'Recovered';  
    this.type1 = 'LineChart'; 
    
    this.data1 = this.file1; 
  
    this.options1 = {   
      colors: ['green'], 
      is3D: true,
      curveType: 'function',
      };   
    this.width = 900;  
    this.height = 500; 
    }
    fun4()
    {
      this.title2 = 'RTPC';  
      this.type2 = 'LineChart'; 
     
      this.data2 = this.file2; 
 
      this.options2 = {   
        colors: ['black'], 
        is3D: true,
        curveType: 'function',
        };   
      this.width = 900;  
      this.height = 500; 
      }
  
  constructor(private jsonservice:chartsservice, public http:HttpClient) {
}
  ngOnInit():void {
    this.getData();
    this.fun();}
  getData()
 {
    this.http.get<jsonfile[]>('https://us-central1-tgs-internal-saige-dev-001.cloudfunctions.net/di_init_covid19_stats_access').subscribe
  ((res)=>{
    this.jsonfile1=this.jsonfile1.concat(res);
    
  })
    
  }
  

   

}




    


  
  


   

  





