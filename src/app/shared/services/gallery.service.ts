import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';
import { IPicture } from '../models/gallery';
import { AngularFireStorage, } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})

export class GalleryService {

  constructor(
    private fireStore: AngularFirestore,
    private storage: AngularFireStorage,
  ) { }

  addData(data: IPicture) {
    return this.fireStore.collection('gallery').doc(data.id).set(data);
  }

  getData() {
    return this.fireStore.collection<IPicture>('gallery').valueChanges()
  }

  gallery: Observable<IPicture[]> = this.getData();

  delete(imageName: string, dataId: string) {
    this.storage.ref(`img/${imageName}`).delete();
    this.fireStore.collection('gallery').doc(dataId).delete();
    this.gallery.subscribe();
  }

}
