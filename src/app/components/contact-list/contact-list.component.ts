import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { State, selectActiveContact, selectContactList } from '../../state';
import * as actions from '../../state/actions';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contactList$: Observable<Contact[]>;
  activeContact$: Observable<Contact | undefined>;
  loading: boolean = true;

  constructor(private store: Store<State>) {
    this.contactList$ = this.store.select(selectContactList);
    this.activeContact$ = this.store.select(selectActiveContact);
  }
  
  ngOnInit() {
    // Set loading to true initially
    this.loading = true;
    this.contactList$.subscribe(contacts => {
      this.loading = contacts.length === 0;
    });
  }

  viewContactClicked(contactId: number) {
    this.store.dispatch(actions.contactSelected({ contactId }));
  }

  editContactClicked(contact: Contact) {
    this.store.dispatch(actions.editContactClicked({ contact }));
  }
}