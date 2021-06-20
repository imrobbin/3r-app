import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pickup-call-card',
  templateUrl: './pickup-call-card.component.html',
  styleUrls: ['./pickup-call-card.component.scss'],
})
export class PickupCallCardComponent implements OnInit {
  @Input() hasFooter: boolean;
  @Input() hasHeader: boolean;

  @Input() status: string;
  @Input() createdAt: string;
  @Input() updatedAt: string;
  @Input() note: string;
  @Input() amount: string;

  constructor() {}

  ngOnInit() {}
}
