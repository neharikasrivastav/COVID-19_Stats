import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CoronaService implements OnInit {
  data1
  state
  BannerData: BehaviorSubject<any> = new BehaviorSubject('')
  url_statewise = 'https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise'
  url_banner = "https://api.covid19india.org/website_data.json"
  constructor(private http: HttpClient) { }
  ngOnInit(): void {

    this.getDataStateWise()
  }

  getBanners(): Observable<any> {
    return this.http.get(this.url_banner)
  }

  getDataStateWise(): Observable<any> {
    return this.http.get(this.url_statewise)
  }
  getState(state) {
    this.state = state
  }
}