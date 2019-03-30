import { PhotosService } from './../photos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist-photos',
  templateUrl: './artist-photos.component.html',
  styleUrls: ['./artist-photos.component.css']
})
export class ArtistPhotosComponent implements OnInit {
artistArray: [];
  constructor(private _route: ActivatedRoute,
              private service: PhotosService) { }

  ngOnInit() {
    this._route.queryParams.subscribe(params => {
      const a = params['collection'];
      this.service.getCollections(a)
      .subscribe(response => {
        this.artistArray = response;
      });
    });
  }


}
