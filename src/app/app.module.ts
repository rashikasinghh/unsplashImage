import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllPhotosComponent } from './all-photos/all-photos.component';
import { ArtistPhotosComponent } from './artist-photos/artist-photos.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileNotFoundComponent } from './file-not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    AllPhotosComponent,
    ArtistPhotosComponent,
    FileNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
