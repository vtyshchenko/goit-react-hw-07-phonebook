import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filterText: '',
  },
  reducers: {
    addContact(state, action) {
      if (
        state.items.find(
          contact => action.payload.name.toLowerCase() === contact.name.toLowerCase(),
        )
      ) {
        alert(`${action.payload.name} is alredy in contacts`);
      } else {
        state.items.push({
          id: action.payload.id,
          name: action.payload.name,
          number: action.payload.number,
        });
      }
    },
    deleteContact(state, action) {
      state.items = state.items.filter(contactItem => {
        return contactItem.id !== action.payload.id;
      });
    },
    changeFilter(state, action) {
      state.filterText = action.payload.filterText;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addContact, deleteContact, changeFilter } = contactsSlice.actions;

export default contactsSlice.reducer;
