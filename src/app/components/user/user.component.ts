import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: [ './user.component.css' ],
  styles: [`
    h2{ color: blue; }
  `]
})
export class UserComponent {
  name = 'John Doe';
}
