import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const portfolioSlice = createSlice({
    name: 'port',
    initialState: {
        portfolio: {}
    },
    reducers: {
        portfolioSuccess: (state, action) =>{
            state.portfolio = action.payload;
            state.loading = false;
        },
        
    }
});

export default portfolioSlice.reducer

const {portfolioSuccess} = portfolioSlice.actions

export const getPortfolio = (id) => async (dispatch) =>{
    try{
        await axios.get(`/api/v1/portfolio/${id}`)
            .then((response)=> dispatch(portfolioSuccess(response.data)))
    }
    catch(e){
        return console.error(e)
    }
} 