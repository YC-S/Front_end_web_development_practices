import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summaryPipe',
})
export class SummaryPipePipe implements PipeTransform {
  transform(value: string, limit: number) {
    if (!value) {
      {
        console.log('not a string');
      }
    }
    let actualLimit = limit ? limit : 50;
    return value.substr(0, actualLimit) + '...';
  }
}
