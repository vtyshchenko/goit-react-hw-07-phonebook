import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/addContact', item => ({
  payload: {},
}));
const deleteContact = createAction('contacts/deleteContact');
const changeFilter = createAction('contacts/changeFilter');

const lst = { addContact, deleteContact, changeFilter };

export default lst;
