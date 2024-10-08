import {createAction, props } from '@ngrx/store';
import { Contact } from '../models/contact.model';

export const appStarted = createAction(
    '[APP] Contacts App Initialised'
);

export const contactListReturned = createAction(
    '[BACKEND SERVICE] Contact List Returned Successfully',
    props<{contactList: Contact[]}>()
)

export const contactSelected = createAction(
    '[CONTACT LIST] Contact Selected',
    props<{contactId: number}>()
);

export const editContactClicked = createAction(
    '[CONTACT LIST] Edit or Add Contact Button Clicked',
    props<{ contact: Contact | null }>() // Allow null here
  );

export const editContactConfrimed = createAction(
    '[CONTACT MODAL] Edit Contact Confirmed (Save Clicked)',
    props<{contact: Contact}>()
);

export const editContactCancelled = createAction(
    '[CONTACT MODAL] Edit Contact Cancelled (Cancel Clicked)'
);

export const contactSavedSuccess = createAction(
    '[BACKEND SERVICE] Contact Saved Successfully',
    props<{contact: Contact}>()
);

export const addContactClicked = createAction(
    '[CONTACT LIST] Add Contact Button Clicked'
  );
  
export const contactAdded = createAction(
    '[CONTACT MODAL] Contact Added',
    props<{ contact: Contact }>()
);
  

