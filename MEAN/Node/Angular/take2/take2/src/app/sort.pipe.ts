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
      return values.user.toUpperCase().indexOf(args.toUpperCase())!==-1 || values.question.toUpperCase().indexOf(args.toUpperCase())!==-1
    })
    return result
  }

}
