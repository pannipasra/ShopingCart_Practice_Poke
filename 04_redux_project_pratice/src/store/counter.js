import { createSlice } from '@reduxjs/toolkit'

const initCounterState  = { counter: 0, showCounter: true }

const counterSlice = createSlice({
    name: 'counter_Z',
    initialState: initCounterState,
    reducers: {
        inc(state){
            state.counter++;
        },
        dec(state){
            state.counter--;
        },
        incByAmount(state, action){
            state.counter = state.counter + action.payload;
        },
        toggle(state){
            state.showCounter = !state.showCounter;
        }

    }
})

export const counterActions =  counterSlice.actions;

export default counterSlice.reducer;