import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { AppComponent } from "./app.component";
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [AppComponent, TableComponent],
  imports: [BrowserModule,BrowserAnimationsModule,
    HttpClientModule,MatTableModule,MatIconModule,MatButtonModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
