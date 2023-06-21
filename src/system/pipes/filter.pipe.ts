import { Pipe, PipeTransform } from '@angular/core';
import { country } from '../interfaces/country.interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(data: country[],searchTerm: string, fields:string[]): country[] {
    if(!searchTerm)return data;
    if(!data)return [];

    searchTerm=searchTerm.toLocaleLowerCase();
    return data.filter(item=>{
      return fields.some(field=>{
        return item[field]?.toString().toLocaleLowerCase().includes(searchTerm);
      })
    })

  }

}
