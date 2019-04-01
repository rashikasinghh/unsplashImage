import { PhotosService } from './../photos.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-photos',
  templateUrl: './all-photos.component.html',
  styleUrls: ['./all-photos.component.css']
})
export class AllPhotosComponent implements OnInit {

  allPhotos = new FormGroup({
    search: new FormControl('')
  });
  responseArray = [];
  constructor(private service: PhotosService ) { }


  ngOnInit() {
  }

  onClick() {
    const form = this.allPhotos.value;
    this.service.getPhotos(form.search)
    .subscribe(response => {
      this.responseArray = response.results;
    });

  }

}
