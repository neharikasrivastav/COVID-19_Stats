export class jsonfile
{
    Date_YMD: any;
    States: any;
    Confirmed: any;
    Recovered: any;
    Deceased: any;
    ICMR_RTPCR: any;
    Vaccine_Doses_administered: any;

      constructor(Date_YMD: any,States: any,Confirmed: any,Recovered: any,Deceased: any,ICMR_RTPCR: any,Vaccine_Doses_administered: any)
      {
          this.Date_YMD=Date_YMD;
          this.States=States;
          this.Confirmed=Confirmed;
          this.Recovered=Recovered;
          this.Deceased=Deceased;
          this.ICMR_RTPCR=ICMR_RTPCR;
          this.Vaccine_Doses_administered=Vaccine_Doses_administered;
      }
}