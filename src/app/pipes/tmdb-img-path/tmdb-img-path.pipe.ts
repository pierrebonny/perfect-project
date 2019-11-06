import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tmdbImgPath'
})
export class TmdbImgPathPipe implements PipeTransform {

  transform(imgPath: string): string {
    return 'https://image.tmdb.org/t/p/original/' + imgPath;
  }

}
