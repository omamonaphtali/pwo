import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friend',
  styles: [
    `.btn-primary {
      background-color: rgb(21, 203, 248);
      border-color: rgb(21, 203, 248);
      font-weight: 600;
    }
    .btn-primary:hover {
      background-color: rgba(21, 203, 248, 0.7);
      border-color: rgb(21, 203, 248);
    }`
  ],
  template: `
  <a href="https://web.facebook.com/PEACEkeny.org/" class="btn btn-primary">Become a Friend</a>`
})
export class FriendComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
