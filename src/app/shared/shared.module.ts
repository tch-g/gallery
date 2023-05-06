import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './popup/modal/modal.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ConfirmDialogComponent } from './popup/confirm-dialog/confirm-dialog.component';
import { SearchFilterPipe } from './pipe/search-filter.pipe';



@NgModule({
  declarations: [
    ModalComponent,
    LoaderComponent,
    ConfirmDialogComponent,
    SearchFilterPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ModalComponent,
    LoaderComponent,
    ConfirmDialogComponent,
    SearchFilterPipe
  ]
})
export class SharedModule { }
