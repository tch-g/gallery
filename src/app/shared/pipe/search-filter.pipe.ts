import { Pipe, PipeTransform } from '@angular/core';
import { IPicture } from '../models/gallery';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: IPicture[], searchText: string): IPicture[] {
    if (searchText) {
      value = value.filter(x => x.title.includes(searchText));
    }
    return value;
  }

}
