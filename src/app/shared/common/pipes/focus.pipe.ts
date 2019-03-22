import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'focus'
})
export class FocusPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      return value.filter(item => {
        return item.unread === true;
      });
    }
  }

}
