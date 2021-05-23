import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CoronaService implements OnInit {
  jsonfile1 = [];
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

  fetchToken()
  {
    var url = "https://us-central1-tgs-internal-saige-dev-001.cloudfunctions.net/di_init_covid19_stats_access";
    const para = { url: 'https://us-central1-tgs-internal-saige-dev-001.cloudfunctions.net/di_init_covid19_stats_getjson' };
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(para),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Token Fetched Successfully');
      this.getData(data[0]["token"]);
     
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    
  }
  update_data(data){
    this.jsonfile1 = data;
  }
  getData(accessT:string)
 {
  var url = "https://us-central1-tgs-internal-saige-dev-001.cloudfunctions.net/di_init_covid19_stats_getjson";
  const para = { sd: '2020-03-14',ed: '2021-05-21', fields:["*"] };
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessT}`,
    },
    body: JSON.stringify(para),
  })
  .then(response => response.json())
  .then(data => {
    console.log('BigQuery Table Data Fetched Successfully');
    this.update_data(data);
    
  })
  .catch((error) => {
    console.error('Error:', error);
  });

    
  }
}