import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { APIResult, Media, MovieCredits } from '../../types';
import { of, Observable } from 'rxjs';

/**
 * Service dedicated to communicate with the media DB API
 */
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  /**
   * Getting list from localstorage
   */
  public getList(listName): string[] {
    return JSON.parse(localStorage.getItem(listName));
  }

  /**
   * Removing current media id from localstorage list
   */
  public removeItem(listName: string, mediaId: string): void {
    const list = this.getList(listName);
    list.splice(list.indexOf(mediaId, 1));
    localStorage.setItem(listName, JSON.stringify(list));
  }

  /**
   * Looking for current media id in localstorage list
   */
  public isInList(listName: string, mediaId: string): boolean {
    const list = this.getList(listName);
    if (!list) {
      localStorage.setItem(listName, JSON.stringify([]));
    }
    return list && list.includes(mediaId);
  }

  /**
   * Adding current media id from localstorage list
   */
  public addItem(listName: string, mediaId: string): void {
    const list = this.getList(listName);
    list.push(mediaId);
    localStorage.setItem(listName, JSON.stringify(list));
  }

}
