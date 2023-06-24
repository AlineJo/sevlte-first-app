//1. create a writable store with 'contacts' as initial data.
//2. transform this store to a custom store named "contactList" where components can subscribe to it and modify its content using Create/Update/delete methods that are added to this custom store, note that id is incremental.
//3. make a writable store named "selectedContactId" with an initial value of 0
//4. make a derived store named "selectedContact" that outputs the selectedContact combining the two previous stores.
//5. export all the stores

import { writable, derived } from "svelte/store";

let contacts = [
  {
    "id": 1,
    "name": "Saif",
    "email": "saif@example.com",
    "phone": "123-456-7890"
  },
  {
    "id": 2,
    "name": "Anwar",
    "email": "anwar@example.com",
    "phone": "098-765-4321"
  }
];



