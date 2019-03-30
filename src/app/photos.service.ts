import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private _http: HttpClient) { }

getPhotos(value): Observable<any> {
// tslint:disable-next-line: max-line-length
  const url = `https://api.unsplash.com/search/photos?client_id=4ff0416f7fe636a641de34cb035f8dc5cc6a3217f1ec45d761b0f52073f2f6d2&query=${value}&per_page=30`;
  return this._http.get(url);
}

getCollections(value): Observable<any> {
  const url = `${value}?client_id=4ff0416f7fe636a641de34cb035f8dc5cc6a3217f1ec45d761b0f52073f2f6d2`;
  return this._http.get(url);
}
}
