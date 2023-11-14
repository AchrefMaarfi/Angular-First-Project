import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  v1: string = "aa"
  v2:string = "bonjour"
  message : string = ''
  prop: boolean = true
  
  show() {
    if (this.message == "") {
      this.message = 'ahmed'
    }
    else {
      this.message=""
    }
  }
}
