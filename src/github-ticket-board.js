import {Component, View} from 'angular2/core';

@Component({
  selector: 'github-ticket-board'
})

@View({
  templateUrl: 'github-ticket-board.html'
})

export class GithubTicketBoard {

  constructor() {
    console.info('GithubTicketBoard Component Mounted Successfully');
  }

}
