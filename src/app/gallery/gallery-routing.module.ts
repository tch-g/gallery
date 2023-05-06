import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { AddPictureComponent } from './add-picture/add-picture.component';

const routes: Routes = [
  {
    path: '',
    component: GalleryComponent
  },
  {
    path: 'add-picture',
    component: AddPictureComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryRoutingModule { }
