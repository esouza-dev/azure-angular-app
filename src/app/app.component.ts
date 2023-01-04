import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  template: `<div>[{{message}}] </div><br /><app-table></app-table>`,
})
export class AppComponent {
  message:string
  constructor(private http: HttpClient) {
    this.http.get(`${environment.apiUrl??""}/api/message`)
      .subscribe((resp: any) => this.message = resp.text);
  }
}
