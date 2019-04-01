import { FileNotFoundComponent } from './file-not-found.component';
import { ArtistPhotosComponent } from './artist-photos/artist-photos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllPhotosComponent } from './all-photos/all-photos.component';

const routes: Routes = [
  {path: '', component: AllPhotosComponent},
  {path: 'artist', component: ArtistPhotosComponent},
  {path: '**', component: FileNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
