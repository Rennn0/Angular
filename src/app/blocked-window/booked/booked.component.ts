import { Component } from '@angular/core';

@Component({
  selector: 'app-booked',
  templateUrl: './booked.component.html',
  styleUrls: ['./booked.component.scss'],
})
export class BookedComponent {
  render: boolean = false;
  constructor() {
    this.render = true;
  }

  ngOnInit() {}
}
