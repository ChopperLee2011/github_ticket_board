import {Component, View} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {GithubTicketBoard} from 'github-ticket-board';
import {AuthService} from './components/'
@Component({
  selector: 'main'
})

@View({
  directives: [GithubTicketBoard],
  template: `
    <github-ticket-board></github-ticket-board>
  `
})

class Main {

}

bootstrap(Main);
