import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { jsonfile } from './charts';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
@Injectable({
    providedIn:'root'
})
export class chartsservice
{
    
  constructor(private http : HttpClient) { }
  
  
}