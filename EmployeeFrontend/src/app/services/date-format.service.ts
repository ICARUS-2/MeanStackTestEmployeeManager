import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateFormatService {

  constructor() { }

  //Modified from https://stackoverflow.com/questions/23593052/format-javascript-date-as-yyyy-mm-dd
    getFormat(d: Date | null = null) {
        if (d == null)
          return "-"
        var month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}
}
