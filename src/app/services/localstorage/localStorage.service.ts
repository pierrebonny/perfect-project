import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

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
  public getList(listName): string[] {
    return JSON.parse(localStorage.getItem(listName));
  }

  /**
   * Removing current media id from localstorage list
   */
  public removeItem(listName: string, mediaId: number): void {
    const list = this.getList(listName);
    list.splice(list.indexOf(mediaId.toString(), 1));
    localStorage.setItem(listName, JSON.stringify(list));
    this.localStorageNotifier.next({id: mediaId, listName, isAdding: false});
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
  public addItem(listName: string, mediaId: number): void {
    const list = this.getList(listName);
    list.push(mediaId.toString());
    localStorage.setItem(listName, JSON.stringify(list));
    this.localStorageNotifier.next({id: mediaId, listName, isAdding: true});
  }

}
