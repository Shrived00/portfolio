
import axios from 'axios';
import { PORTFOLIO_DETAILS_REQUEST, PORTFOLIO_DETAILS_SUCCESS, PORTFOLIO_DETAILS_FAILS } from '../constants/portfolioConstants';



const serverPortfolioUrl = "https://buisnesscardserver2.herokuapp.com/api/v1/portfolio";



export const listPortfolioDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: PORTFOLIO_DETAILS_REQUEST })
        const { data } = await axios.get(`/api/v1/portfolio/634423ee353695c9ae81478b`);

        dispatch({
            type: PORTFOLIO_DETAILS_SUCCESS,
            payload: { portfolio: data }
        })
    } catch (error) {
        dispatch({
            type: PORTFOLIO_DETAILS_FAILS,
            payload: { error: error.response && error.response.data.message ? error.response.data.message : error.message }
        })
    }
}