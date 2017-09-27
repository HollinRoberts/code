import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(args==undefined){
      return value
    }
    console.log(value)
    var result=value.filter(function(values){
      console.log(values)
      return values.user.indexOf(args)!==-1 || values.question.indexOf(args)!==-1
    })
    return result
  }

}
