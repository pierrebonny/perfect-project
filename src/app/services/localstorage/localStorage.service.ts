import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Media } from 'src/app/types';

/**
 * Service dedicated to communicate with the media DB API
 */
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  public localStorageNotifier = new Subject<{ id: number, listName: string, isAdding: boolean }>();

  /**
   * Getting list from localstorage
   */
  public getList(listName: string): Media[] {
    return JSON.parse(localStorage.getItem(listName));
  }

  public getListAndFilterByMediaType(listName: string, mediaType: string): Media[] {
    return JSON.parse(localStorage.getItem(listName)).filter(media => media.media_type === mediaType);
  }

  /**
   * Removing current media id from localstorage list
   */
  public removeItem(listName: string, currentMedia: Media): void {
    const list = this.getList(listName);
    const index = list.findIndex(media => (media.media_type === currentMedia.media_type && media.id === currentMedia.id));
    if (index >= 0) {
      list.splice(index, 1);
    }
    localStorage.setItem(listName, JSON.stringify(list));
    this.localStorageNotifier.next({id: currentMedia.id, listName, isAdding: false});
  }

  /**
   * Looking for current media id in localstorage list
   */
  public isInList(listName: string, mediaId: number): boolean {
    const list = this.getList(listName);
    if (!list) {
      localStorage.setItem(listName, JSON.stringify([]));
    }
    return list && list.find(media => media.id === mediaId) !== undefined;
  }

  /**
   * Adding current media id from localstorage list
   */
  public addItem(listName: string, media: Media): void {
    const list = this.getList(listName);
    list.push(media);
    localStorage.setItem(listName, JSON.stringify(list));
    this.localStorageNotifier.next({id: media.id, listName, isAdding: true});
  }

}
