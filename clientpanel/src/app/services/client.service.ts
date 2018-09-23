import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Client } from '../models/Client';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  clientsCollection: AngularFirestoreCollection<Client>;
  clientDoc: AngularFirestoreDocument<Client>;
  clients: Observable<Client[]>;
  client: Observable<Client>;

  constructor(private afs: AngularFirestore) {
    this.clientsCollection = this.afs.collection<Client>('Clients', ref => ref.orderBy('lastName', 'asc'));
  }

  getClients(): Observable<Client[]> {
    // Get clients with the id
    this.clients = this.clientsCollection
      .snapshotChanges()
      .pipe(
        map(actions =>
          actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data } as Client;
        })));
    return this.clients;
  }

  addClient(client: Client) {
    this.clientsCollection.add(client);
  }

  getClient(id: string): Observable<Client> {
    this.clientDoc = this.afs.doc<Client>(`Clients/${id}`);
    this.client = this.clientDoc
      .snapshotChanges()
      .pipe(
        map(action => {
          if (!action.payload.exists) {
            return null;
          } else {
            const data = action.payload.data();
            const docId = action.payload.id;
            return { id: docId, ...data } as Client;
          }
        }));
    return this.client;
  }

  updateClient(client: Client) {
    this.clientDoc = this.afs.doc(`Clients/${client.id}`);
    this.clientDoc.update(client);
  }

  deleteClient(client: Client) {
    this.clientDoc = this.afs.doc(`Clients/${client.id}`);
    this.clientDoc.delete();
  }
}
