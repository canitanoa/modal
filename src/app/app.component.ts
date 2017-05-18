import { Component, ViewChild } from '@angular/core';
import { AliasComponent } from "app/alias/alias.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  muestra:boolean = false;

  @ViewChild('modalAlias') modalAlias : AliasComponent;

  constructor() { }
  
  showALiasModal(){
    this.modalAlias.show();
  }

}
