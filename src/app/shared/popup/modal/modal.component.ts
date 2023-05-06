import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPicture } from '../../models/gallery';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @Input() img: IPicture | null = null;
  @Output() close = new EventEmitter<boolean>();

  closeImg(){
    this.close.emit(true);
    this.img = null;
  }

}
