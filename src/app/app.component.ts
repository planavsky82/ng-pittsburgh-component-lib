import { Component, ViewChild } from '@angular/core';
import { ModalComponent } from 'components/src/lib/modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(ModalComponent) modal: ModalComponent;

  toggle(): void {
    this.modal.toggle();
  }
}
