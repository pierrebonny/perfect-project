import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';


@Pipe({
  name: 'tmdbDate'
})
export class TmdbDatePipe implements PipeTransform {

  transform(dateStr: string, format = 'LL'): string {
    const momentDate = moment(dateStr);
    return momentDate.format(format);
  }
}