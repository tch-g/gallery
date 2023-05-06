import { Component, OnInit } from '@angular/core';
import { IPicture } from 'src/app/shared/models/gallery';
import { GalleryService } from 'src/app/shared/services/gallery.service';
import { AngularFireStorage, } from '@angular/fire/compat/storage';
import { AngularFirestore,  } from '@angular/fire/compat/firestore';
import { AngularFireDatabase,} from '@angular/fire/compat/database';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  dataGallery!: IPicture[];
  showModal: IPicture | null = null;
  deleteData: IPicture | null = null;
  searchText!: string;

  constructor( private galleryService: GalleryService) {
    
  }
  ngOnInit(): void {
   this.getData();
  }


  getData(){
    this.galleryService.gallery.subscribe(res=>{
      this.dataGallery = res;
    });
  }

  closeImg(){
      this.getData();
  }
  
  // delete(imageName: string, dataId: string) {
  //   this.galleryService.delete(imageName,dataId);
  // }

  onConfirm(confirmed: boolean, imageName: string, dataId: string){
    if(confirmed){
      this.galleryService.delete(imageName,dataId);
    }
    this.deleteData = null;
  }

}
