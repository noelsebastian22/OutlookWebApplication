import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'focus',
  pure:false
})
export class FocusPipe implements PipeTransform {

  transform(value: any): any {
    if (value) {
      return value.filter(item => {
        return item.unread === true;
      });
    }
  }

}
