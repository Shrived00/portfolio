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

export const getPortfolio = () => async (dispatch) =>{
    try{
        await axios.get('/api/v1/portfolio/634423ee353695c9ae81478b')
            .then((response)=> dispatch(portfolioSuccess(response.data)))
    }
    catch(e){
        return console.error(e)
    }
} 