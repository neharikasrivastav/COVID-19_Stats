
import { Component, ElementRef, OnInit, SimpleChanges, ViewChild, ɵɵpureFunction1, ɵɵpureFunction2 } from '@angular/core';  
import { GoogleChartComponent } from 'angular-google-charts'; 
import {  jsonfile } from './charts';
import { chartsservice } from './charts.service';
import db from '../app/db.json';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CoronaService } from '../shared/corona.service';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  jsonfile1 = this.cs.jsonfile1;
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
  
  constructor(private jsonservice:chartsservice, public http:HttpClient, private cs:CoronaService) {
}
  ngOnInit():void {
    this.fun();
  }
  
}




    


  
  


   

  





