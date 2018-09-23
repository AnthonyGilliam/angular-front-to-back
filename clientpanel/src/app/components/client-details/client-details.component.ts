import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


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

  constructor(private router: Router,
              private route: ActivatedRoute,
              private clientService: ClientService,
              private toastr: ToastrService) { }

  ngOnInit() {
    // Get ID from URL
    this.id = this.route.snapshot.params['id'];
    // Get client
    this.clientService
      .getClient(this.id)
      .subscribe(client => {
        if (client) {
          this.hasBalance = !!client.balance;
        }
        this.client = client;
      });
  }

  updateBalance() {
    this.clientService.updateClient(this.client);
    this.showBalanceUpdateInput = false;
  }

  onDelete() {
    if (confirm('Are you sure?')) {
      this.clientService.deleteClient(this.client);
      this.toastr.success('Client deleted', 'Success!');
      this.router.navigate(['/']);
    }
  }
}
