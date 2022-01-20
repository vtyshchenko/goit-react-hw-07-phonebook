import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('https://61e9c3d87bc0550017bc646c.mockapi.io/contacts');
      if (!response.ok) {
        throw new Error('Error fetching data from server!');
      }
      const data = await response.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filterText: '',
    status: null,
    error: null,
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
          phone: action.payload.phone,
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
  extraReducers: {
    [fetchContacts.pending]: state => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.items = action.payload;
    },
    [fetchContacts.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addContact, deleteContact, changeFilter } = contactsSlice.actions;

export default contactsSlice.reducer;
