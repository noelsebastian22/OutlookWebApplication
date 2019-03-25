import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterFlag'
})
export class FilterFlagPipe implements PipeTransform {

  transform(value: any, flag: boolean): any {
    if (value) {
      if (flag == true) {
        return value.filter(item => {
          return item.flagged === true;
        });
      }
      else{
        return value;
      }
    }
  }

}
