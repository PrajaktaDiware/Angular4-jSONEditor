/**
 * @name Angular4-JsonEdiotr
 * @description
 * Wrapper for Json Editor in Angular 4.
 * @author Manish Sodavadiya 2017-09-08
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonEditorComponent } from './jsoneditor/jsoneditor.component';

 @NgModule({
  imports: [CommonModule],
  declarations: [JsonEditorComponent],
  exports: [JsonEditorComponent]
})

export class Ng4JsonEditorModule { }