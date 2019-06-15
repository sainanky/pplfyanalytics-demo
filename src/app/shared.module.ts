import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule, MatInputModule, HttpClientModule
  ],
  declarations: [],
  exports: [CommonModule,
    MatButtonModule, MatInputModule, HttpClientModule ],
})
export class SharedModule { }
