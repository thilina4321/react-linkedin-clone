import {createSlice} from '@reduxjs/toolkit'

const initialState = {}

const userSlice = createSlice({
    name:'userSlice',
    initialState,
    reducers:{
        addUser(state){}
    }
})

export const user = userSlice.actions
export default userSlice.reducer