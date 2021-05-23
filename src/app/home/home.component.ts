import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { jsonfile } from '../charts/charts';
import { CoronaService } from '../shared/corona.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(public http:HttpClient, private cs:CoronaService) { }
  states=["Andaman and Nicobar Islands","Andhra Pradesh","Arunachal Pradesh","Assam","Bihar",
  "Chandigarh","Chhattisgarh","Dadra and Nagar Haveli and Daman and Diu","Delhi","Goa",
  "Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir","Jharkhand",
  "Karnataka","Kerala","Ladakh","Lakshadweep","Madhya Pradesh","Maharashtra",
  "Manipur","Meghalaya","Miscellaneous","Mizoram","Nagaland",
  "Odisha","Puducherry","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Total_India",
  "Tripura","Uttar Pradesh","Uttarakhand","West Bengal"];
  jsonfile1=this.cs.jsonfile1;
  con=[];
  rec=[];
  det=[];
  vac=[];
  confirm:number=0;
  recover:number=0;
  deaths:number=0;
  vaccine:number=0;
  icmr:number=0;
  ngOnInit(): void {
  
   this.fun();    
  }

  selectChanger(){
    this.fun();
  }
fun(){
  //console.log(this.jsonfile1);
  for(let index=0;index<this.states.length;index++)
{
  this.confirm=0;
  this.recover=0;
  this.deaths=0;
  this.vaccine=0;
  this.icmr=0;
  
  for(let ind=0;ind<this.jsonfile1.length;ind++){
  
  if(this.jsonfile1[ind].States==this.states[index])
  {
    //console.log("Sucess");
  this.confirm=this.confirm+Number(this.jsonfile1[ind].Confirmed);
  this.recover=this.recover+Number(this.jsonfile1[ind].Recovered);
  this.deaths=this.deaths+Number(this.jsonfile1[ind].Deceased);
  this.vaccine=this.vaccine+Number(this.jsonfile1[ind].Vaccine_Doses_administered);
  }
  
  }
  //console.log(this.confirm);
  this.con.push(this.confirm);
  this.rec.push(this.recover);
  this.det.push(this.deaths);
  this.vac.push(this.vaccine);

}
//console.log(this.con);
}

 
  }