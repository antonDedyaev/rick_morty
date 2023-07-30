import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitialState {
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
}

const initialState: IInitialState = {
    name: '',
    status: '',
    species: '',
    type: '',
    gender: '',
};

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        nameFilterAdded: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
        statusFilterAdded: (state, action: PayloadAction<string>) => {
            state.status = action.payload;
        },
        speciesFilterAdded: (state, action: PayloadAction<string>) => {
            state.species = action.payload;
        },
        typeFilterAdded: (state, action: PayloadAction<string>) => {
            state.type = action.payload;
        },
        genderFilterAdded: (state, action: PayloadAction<string>) => {
            state.gender = action.payload;
        },
        filtersRemoved: (state) => {
            state.name = '';
            state.status = '';
            state.species = '';
            state.type = '';
            state.gender = '';
        },
    },
});

export const {
    nameFilterAdded,
    speciesFilterAdded,
    statusFilterAdded,
    typeFilterAdded,
    genderFilterAdded,
    filtersRemoved,
} = filtersSlice.actions;

export default filtersSlice.reducer;
