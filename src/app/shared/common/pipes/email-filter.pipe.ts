import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emailFilter'
})
export class EmailFilterPipe implements PipeTransform {

  transform(emailList: any, searchString: any): any {
    // Search whether search string is undefined or empty
    if(searchString==undefined||searchString==""){
      return emailList;
    }

    // return updated email list
    return emailList.filter(email=>{
      return email.content.toLowerCase().includes(searchString.toLowerCase());
    })
  }

}
