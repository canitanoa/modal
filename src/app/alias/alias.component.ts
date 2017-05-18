import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from "app/modal/modal.component";

@Component({
  selector: 'app-alias',
  templateUrl: './alias.component.html',
  styles: []
})
export class AliasComponent implements OnInit {

  @ViewChild('modal1') modal : ModalComponent;

  constructor() { }

  ngOnInit() {
  }

  public show(): void {
    this.modal.show();
  }

  public hide(): void {
    this.modal.hide();
  }
  
}
