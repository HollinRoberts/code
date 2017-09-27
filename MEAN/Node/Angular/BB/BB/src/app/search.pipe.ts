import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(value: any, args?: string): any {

    if(args==undefined){
      return value
    }
    var result=value.filter(function(values){
      return values.name.toUpperCase().indexOf(args.toUpperCase())!==-1 || values.score.toUpperCase().indexOf(args.toString())!==-1 || values.percent.toString().indexOf(args.toString())!==-1
    })
    return result


  
 
}

}
