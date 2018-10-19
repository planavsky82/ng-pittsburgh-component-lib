import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'pgh-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  animations: [
    trigger('openCloseBg', [
      state('open', style({
        opacity: 0.75,
        display: 'block'
      })),
      state('closed', style({
        opacity: 0,
        display: 'none'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
    trigger('openCloseModal', [
      state('open', style({
        top: 'calc(50vh / 2)',
        display: 'block'
      })),
      state('closed', style({
        top: '-1000px',
        display: 'none'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ])
  ]
})
export class ModalComponent implements OnInit {
  public isOpen = false;

  constructor() { }

  ngOnInit() {
  }

  toggle(): void {
    this.isOpen = !this.isOpen;
  }

}
