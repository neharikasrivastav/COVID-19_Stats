
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
  jsonfile1=[
    {"Date_YMD": "2020-03-14", "States": "Total_India", "Confirmed": 81, "Recovered": 9, "Deceased": 2, "ICMR_RTPCR": 0.0, "Vaccine_Doses_administered": 0},
    {"Date_YMD": "2020-03-15", "States": "Total_India", "Confirmed": 27, "Recovered": 4, "Deceased": 0, "ICMR_RTPCR": 0.0, "Vaccine_Doses_administered": 0},
    {"Date_YMD": "2020-03-16", "States": "Total_India", "Confirmed": 15, "Recovered": 1, "Deceased": 0, "ICMR_RTPCR": 0.0, "Vaccine_Doses_administered": 0},
    {"Date_YMD": "2020-03-17", "States": "Total_India", "Confirmed": 11, "Recovered": 1, "Deceased": 1, "ICMR_RTPCR": 0.0, "Vaccine_Doses_administered": 0},
   {"Date_YMD": "2020-03-18", "States": "Total_India", "Confirmed": 37, "Recovered": 0, "Deceased": 0, "ICMR_RTPCR": 0.0, "Vaccine_Doses_administered": 0},
    {"Date_YMD": "2020-03-19", "States": "Total_India", "Confirmed": 27, "Recovered": 5, "Deceased": 1, "ICMR_RTPCR": 0.0, "Vaccine_Doses_administered": 0},
   {"Date_YMD": "2020-03-20", "States": "Total_India", "Confirmed": 58, "Recovered": 3, "Deceased": 0, "ICMR_RTPCR": 0.0, "Vaccine_Doses_administered": 0},
    {"Date_YMD": "2020-03-21", "States": "Total_India", "Confirmed": 78, "Recovered": 0, "Deceased": 0, "ICMR_RTPCR": 0.0, "Vaccine_Doses_administered": 0},
    {"Date_YMD": "2020-03-22", "States": "Total_India", "Confirmed": 67, "Recovered": 0, "Deceased": 3, "ICMR_RTPCR": 0.0, "Vaccine_Doses_administered": 0},
   {"Date_YMD": "2020-03-23", "States": "Total_India", "Confirmed": 102, "Recovered": 12, "Deceased": 2, "ICMR_RTPCR": 0.0, "Vaccine_Doses_administered": 0},
   {"Date_YMD": "2020-03-24", "States": "Total_India", "Confirmed": 64, "Recovered": 5, "Deceased": 1, "ICMR_RTPCR": 0.0, "Vaccine_Doses_administered": 0},
   {"Date_YMD": "2020-03-25", "States": "Total_India", "Confirmed": 90, "Recovered": 3, "Deceased": 1, "ICMR_RTPCR": 0.0, "Vaccine_Doses_administered": 0},
   {"Date_YMD": "2021-04-16", "States": "Total_India", "Confirmed": 234002, "Recovered": 122886, "Deceased": 1338, "ICMR_RTPCR": 286854303.0, "Vaccine_Doses_administered": 119937641},
    {"Date_YMD": "2021-04-17", "States": "Total_India", "Confirmed": 260895, "Recovered": 138209, "Deceased": 1498, "ICMR_RTPCR": 288754153.0, "Vaccine_Doses_administered": 122622590},
    {"Date_YMD": "2021-04-18", "States": "Total_India", "Confirmed": 275063, "Recovered": 143839, "Deceased": 1620, "ICMR_RTPCR": 290373311.0, "Vaccine_Doses_administered": 123852566},
    {"Date_YMD": "2021-04-19", "States": "Total_India", "Confirmed": 257003, "Recovered": 154357, "Deceased": 1757, "ICMR_RTPCR": 292317977.0, "Vaccine_Doses_administered": 127129113},
    {"Date_YMD": "2021-04-20", "States": "Total_India", "Confirmed": 294365, "Recovered": 166656, "Deceased": 2021, "ICMR_RTPCR": 293967292.0, "Vaccine_Doses_administered": 130119310},
   {"Date_YMD": "2021-04-21", "States": "Total_India", "Confirmed": 315752, "Recovered": 179434, "Deceased": 2101, "ICMR_RTPCR": 295588857.0, "Vaccine_Doses_administered": 132330644},
   {"Date_YMD": "2021-04-22", "States": "Total_India", "Confirmed": 332531, "Recovered": 192317, "Deceased": 2257, "ICMR_RTPCR": 298270977.0, "Vaccine_Doses_administered": 135478420},
    {"Date_YMD": "2021-04-23", "States": "Total_India", "Confirmed": 345296, "Recovered": 220545, "Deceased": 2620, "ICMR_RTPCR": 300553094.0, "Vaccine_Doses_administered": 138379832},
    {"Date_YMD": "2021-04-24", "States": "Total_India", "Confirmed": 348996, "Recovered": 215809, "Deceased": 2761, "ICMR_RTPCR": 302458129.0, "Vaccine_Doses_administered": 140916417},
   {"Date_YMD": "2021-04-25", "States": "Total_India", "Confirmed": 354658, "Recovered": 218626, "Deceased": 2808, "ICMR_RTPCR": 304502099.0, "Vaccine_Doses_administered": 141911223},
    {"Date_YMD": "2021-04-26", "States": "Total_India", "Confirmed": 319471, "Recovered": 249009, "Deceased": 2762, "ICMR_RTPCR": 306285603.0, "Vaccine_Doses_administered": 145271186},
   {"Date_YMD": "2021-04-27", "States": "Total_India", "Confirmed": 362913, "Recovered": 262349, "Deceased": 3286, "ICMR_RTPCR": 308412803.0, "Vaccine_Doses_administered": 147827367},
    {"Date_YMD": "2021-04-28", "States": "Total_India", "Confirmed": 379404, "Recovered": 274171, "Deceased": 3646, "ICMR_RTPCR": 310699380.0, "Vaccine_Doses_administered": 150020648}, 
    {"Date_YMD": "2021-04-29", "States": "Total_India", "Confirmed": 386773, "Recovered": 291727, "Deceased": 3502, "ICMR_RTPCR": 312849350.0, "Vaccine_Doses_administered": 152245179}, 
    {"Date_YMD": "2021-04-30", "States": "Total_India", "Confirmed": 402014, "Recovered": 299198, "Deceased": 3525, "ICMR_RTPCR": 315013538.0, "Vaccine_Doses_administered": 154989635}, 
   {"Date_YMD": "2021-05-19", "States": "Total_India", "Confirmed": 276193, "Recovered": 369005, "Deceased": 3877, "ICMR_RTPCR": 354422968.0, "Vaccine_Doses_administered": 187009792}];
  a:string;
  b:number;
  c:number;
  d:number;
  e:number;
  file=[];
  file1=[];
  file2=[];
  file3=[];
  file4=[];
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
  cdata:any;
  options2:any;
  selectedDay: string = "Total_India";
  start:string="2020-03-12";
  end:string="2021-02-22";
  date:Date;
  dt=[];
  date1:Date;
  title3:string;
  type3:string;
  data3=[];
  options3:any;
  columnNames5:any;
  columnNames4:any;
  columnNames2:any;
  columnNames1:any;
  columnNames3:any;
  title4:string;
  type4:string;
  data4=[];
  options4:any;
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
    this.file3=[];
    this.file4=[];
    this.fun();
    
  }
  selectChanger(){
    this.file=[];
    this.file1=[];
    this.file2=[];
    this.file3=[];
    this.file4=[];
    this.fun();
  }

  combi()
 {
  this.columnNames4=["Date","Confirmed","Recovered"];
     this.title3 ='Confirmed and Recovered';
     this.type3="ComboChart"
     this.data3=this.file3;
     
   this.options3={
    
    vAxis: {title: 'Count'},
    hAxis: {title: 'Date'}
   };
   this.width = 900;  
    this.height = 500;
  }
  combi1()
 {
  
  this.data4=this.file4;
  this.options4={
    
    vAxis: {title: 'Count'},
    hAxis: {title: 'Date'},
   };
   this.title4 ='Vaccine and RTPCR';
   this.type4="ComboChart";
   
  this.columnNames5= ['Date', 'RTPCR','Vaccine'];
  this.width = 900;  
    this.height = 500;
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
  this.e=+this.jsonfile1[index].Vaccine_Doses_administered;
 
  this.file.push([this.a,this.b]);
  
  this.fun2(); 

  this.file1.push([this.a,this.c])
  
  this.fun3();
  this.file2.push([this.a,this.d])
  this.fun4();
  this.file3.push([this.a,this.b,this.c]);
  this.combi();
  this.file4.push([this.a,this.d,this.e]);
  this.combi1();
}
 }
  }
  fun2()
  {
   
    this.title = 'Confirmed';  
    this.type = 'AreaChart';  
    this.data = this.file; 
    this.options = { 
      vAxis: {title: 'Count'},
    hAxis: {title: 'Date'},  
      colors: ['red'], 
      is3D: true,
      curveType: 'function',
      };  
      this.columnNames1=["Date","Confirmed"];  
    this.width = 900;  
    this.height = 500; 
  }
  fun3()
  {
    this.title1 = 'Recovered';  
    this.type1 = 'AreaChart'; 
    
    this.data1 = this.file1; 
  
    this.options1 = { 
      vAxis: {title: 'Count'},
    hAxis: {title: 'Date'},  
      colors: ['green'], 
      is3D: true,
      curveType: 'function',
      };   
    this.width = 900;  
    this.height = 500; 
    this.columnNames2=["Date","Recovered"];
    }
    fun4()
    {
      this.title2 = 'RTPCR';  
      this.type2 = 'AreaChart'; 
     
      this.data2 = this.file2; 
 
      this.options2 = { 
        vAxis: {title: 'Count'},
    hAxis: {title: 'Date'},  
        colors: ['black'], 
        is3D: true,
        curveType: 'function',
        };   
      this.width = 900;  
      this.height = 500; 
      this.columnNames3=["Date","RTPCR"];
      }
  
  constructor(private jsonservice:chartsservice, public http:HttpClient) {
}
  ngOnInit():void {
    this.getData();
    this.fun();
  }
  getData()
 {
    this.http.get<jsonfile[]>('https://us-central1-tgs-internal-saige-dev-001.cloudfunctions.net/di_init_covid19_stats_access').subscribe
  ((res)=>{
    this.jsonfile1=this.jsonfile1.concat(res);
    
  })
  
  }
  

   

}




    


  
  


   

  





