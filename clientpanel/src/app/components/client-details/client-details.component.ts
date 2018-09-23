import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

import { ClientService } from '../../services/client.service';
import { Client } from '../../models/Client';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
  id: string;
  client: Client;
  hasBalance = false;
  showBalanceUpdateInput = false;

  constructor(private clientService: ClientService,
              private router: Router,
              private route: ActivatedRoute,
              private flashMessage: FlashMessagesService) { }

  ngOnInit() {
    // Get ID from URL
    this.id = this.route.snapshot.params['id'];
    // Get client
    this.clientService
      .getClient(this.id)
      .subscribe(client => {
        this.client = client;
      });
  }

  updateBalance() {
    this.clientService.updateClient(this.client);
    this.flashMessage
      .show('Balance Updated'
      , {
      cssClass: 'alert-success', timeout: 4000
    });
  }
}
