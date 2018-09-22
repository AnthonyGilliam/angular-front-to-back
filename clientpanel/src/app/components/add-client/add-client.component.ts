import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

import { ClientService } from '../../services/client.service';
import { Client } from '../../models/Client';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  client: Client = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    balance: 0
  };

  disableBalanceOnAdd = true;
  @ViewChild('ClientForm') form: any;

  constructor(private flashMessage: FlashMessagesService,
              private clientService: ClientService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit({ value, valid }: { value: Client, valid: boolean }) {
    value.balance = this.disableBalanceOnAdd ? 0 : value.balance;

    if (!valid) {
      // Show error
      this.flashMessage
          .show('Please fill out the form correctly'
            , {
                cssClass: 'alert-danger',
                timeout: 4000
            });
    } else {
      // Add new client
      this.clientService.addClient(value);
      // show message
      this.flashMessage.show('New Client Added!', { cssClass: 'alert-success' });
      // Redirect to dash
      this.router.navigate(['/']);
    }
  }
}
