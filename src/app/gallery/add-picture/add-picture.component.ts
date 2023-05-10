import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CPicture, IPicture } from 'src/app/shared/models/gallery';
import { Observable } from 'rxjs';
import { AngularFireStorage, } from '@angular/fire/compat/storage';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { GalleryService } from 'src/app/shared/services/gallery.service';
import { uniqueId } from 'src/app/shared/methods/uniqueid';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-picture',
  templateUrl: './add-picture.component.html',
  styleUrls: ['./add-picture.component.scss']
})

export class AddPictureComponent implements OnInit {

  addPictureValue: CPicture = new CPicture();
  imgUrl!: string;
  imgName!: string;
  gallery!: Observable<IPicture[]>;
  arrayId: string[] = [];
  file: any;

  constructor(
    private storage: AngularFireStorage,
    private loadingService: LoadingService,
    private galleryService: GalleryService,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.gallery = this.galleryService.gallery;
    this.gallery.subscribe(res => {
      res.map(x => this.arrayId.push(x.id));
    });
  }


  onChange(event: any) {
    this.file = event.target.files[0];
  }


  async addPicture(f: NgForm) {
    let file = this.file;
    this.imgUrl = await this.downloadImage(file);
    this.addPictureValue.fileReader = this.imgUrl;
    let toNumber = this.arrayId.map(x => Number(x));
    let numbId = uniqueId(toNumber);
    let id = String(numbId);
    this.addPictureValue.id = id;
    let data = {
      id: this.addPictureValue.id,
      title: this.addPictureValue.title,
      imgName: this.imgName,
      file: this.addPictureValue.file,
      fileReader: this.addPictureValue.fileReader
    };
    this.galleryService.addData(data);
    this.router.navigate(['gallery']);
  }


  async downloadImage(file: any) {
    this.loadingService.start();
    let toNumber = this.arrayId.map(x => Number(x));
    let numbId = uniqueId(toNumber);
    let path = `img/${file.name}+${numbId}`;
    this.imgName = `${file.name}+${numbId}`;
    const ref = this.storage.ref(path);
    const task = await ref.put(file);
    return await task.ref.getDownloadURL().finally(() => {
      this.loadingService.stop();
    });
  }


}
