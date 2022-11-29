import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadPostComponent } from './read-post.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../store/reducer';



@NgModule({
  declarations: [ReadPostComponent],
  imports: [
    CommonModule,
  ],
  exports: [ReadPostComponent]
})
export class ReadPostModule { }
