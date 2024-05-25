import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(tomb:any, keresendo:any): any {
    if (!tomb) return null
    // if (!keresendo) return tomb
    tomb = tomb.filter(
      (elem:any)=>elem.title.includes(keresendo)
    )
    return tomb
  }

}
