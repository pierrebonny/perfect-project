import { Injectable,Inject, PLATFORM_ID } from '@angular/core';
import { Subject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { Media } from 'src/app/types';

/**
 * Service dedicated to communicate with the media DB API
 */
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private store: Storage;

  constructor(@Inject(PLATFORM_ID) private platformID: any) {
    if (isPlatformBrowser(this.platformID)) {
      this.store = window.localStorage;
    }
  }

  public localStorageNotifier = new Subject<{ id: number, listName: string, isAdding: boolean }>();

  /**
   * Getting list from localstorage
   */
  public getList(listName: string): Media[] {
    if (!this.store || !this.store.getItem(listName)) {
      return [];
    }
    return JSON.parse(localStorage.getItem(listName));
  }

  public getListAndFilterByMediaType(listName: string, mediaType: string): Media[] {
    if (!mediaType) {
      return this.getList(listName);
    }
    return this.getList(listName).filter(media => media.media_type === mediaType);
  }

  /**
   * Removing current media id from localstorage list
   */
  public removeItem(listName: string, currentMedia: Media): void {
    if (!this.store || !this.store.getItem(listName) || !currentMedia) {
      return;
    }
    const list = this.getList(listName);
    const index = list.findIndex(media => (media.media_type === currentMedia.media_type && media.id === currentMedia.id));
    if (index >= 0) {
      list.splice(index, 1);
    }
    this.store.setItem(listName, JSON.stringify(list));
    this.localStorageNotifier.next({id: currentMedia.id, listName, isAdding: false});
  }

  /**
   * Looking for current media id in localstorage list
   */
  public isInList(listName: string, mediaId: number): boolean {
    if (!this.store || !this.store.getItem(listName) || !mediaId) {
      return false;
    }
    const list = this.getList(listName);
    return list && list.find(media => media.id === mediaId) !== undefined;
  }

  /**
   * Adding current media id from localstorage list
   */
  public addItem(listName: string, media: Media): void {
    if (!this.store || !media) {
      return;
    }
    const list = this.getList(listName);
    list.push(media);
    this.store.setItem(listName, JSON.stringify(list));
    this.localStorageNotifier.next({id: media.id, listName, isAdding: true});
  }

}
