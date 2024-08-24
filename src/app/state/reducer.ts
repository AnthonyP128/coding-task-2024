import { createReducer, on } from "@ngrx/store";
import { Contact } from "../models/contact.model";
import * as actions from "./actions";
import * as _ from 'lodash';

export interface State {
    contactList: Contact[];
    selectedContactId: number | null;
}

const initialState: State = {
    contactList: [],
    selectedContactId: null
};

// Helper function to upsert contacts in the list
function upsertContactList(contactList: Contact[], updatedContact: Contact): Contact[] {
    const index = _.findIndex(contactList, { id: updatedContact.id });
    if (index < 0) {
        // Add new contact
        return [...contactList, updatedContact];
    }
    // Update existing contact
    return [...contactList.slice(0, index), updatedContact, ...contactList.slice(index + 1)];
}

export const reducer = createReducer(
    initialState,
    on(actions.contactListReturned, (state, { contactList }) => ({
        ...state,
        contactList
    })),
    on(actions.contactSavedSuccess, (state, { contact }) => {
        // Check if contact ID is valid for updating
        if (contact.id > 0) {
            const updatedContactList = upsertContactList(state.contactList, contact);
            return {
                ...state,
                contactList: updatedContactList
            };
        } else {
            // New contact with ID -1, assign a new ID and add to the list
            const newContact = { ...contact, id: getNextId(state.contactList) };
            return {
                ...state,
                contactList: [...state.contactList, newContact]
            };
        }
    }),
    on(actions.contactSelected, (state, { contactId }) => ({
        ...state,
        selectedContactId: contactId
    })),
    on(actions.editContactClicked, (state, { contact }) => ({
        ...state,
        selectedContactId: contact ? contact.id : null
    }))
);

// Helper function to get the next ID for new contacts
function getNextId(contactList: Contact[]): number {
    return contactList.length > 0 ? Math.max(...contactList.map(c => c.id)) + 1 : 1;
}
