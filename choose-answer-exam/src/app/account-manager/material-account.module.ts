import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChangePassComponent} from './component/change-pass/change-pass.component';
import {MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDialogModule,
    BrowserAnimationsModule,
  ],
  entryComponents: [ChangePassComponent]
})
export class MaterialAccountModule { }
