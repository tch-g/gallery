import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent {
  
  @Input() id: string | null = null;
  @Output() confirm = new EventEmitter<boolean>();

  agree(){
    this.confirm.emit(true);
    this.id = null;
  }

  disagree(){
    this.confirm.emit(false);
    this.id = null;
  }

}
