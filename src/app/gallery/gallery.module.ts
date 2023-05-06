import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery/gallery.component';
import { AddPictureComponent } from './add-picture/add-picture.component';
import { GalleryRoutingModule } from './gallery-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    GalleryComponent,
    AddPictureComponent
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class GalleryModule { }
