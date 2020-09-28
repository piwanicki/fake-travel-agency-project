import {
    NEWS_LOADING,
    NEWS_SUCCESS,
    NEWS_ERROR,
    NEWS_ADD
} from "../actions/newsActions";
import { NewsTypes } from '../types/NewsTypes';
import { NewsActionTypes } from '../actions/newsActions';
import { Reducer } from 'redux';

const initialState: NewsTypes = {
    error: '',
    newsLoading: false,
    news: []
};

const reducer: Reducer<NewsTypes, NewsActionTypes> = (state = initialState, action) => {
    switch (action.type) {
        case NEWS_LOADING: {
            return {
                ...state,
                newsLoading: true,
            };
        }

        case NEWS_SUCCESS: {
            const data = action.data;
            return {
                ...state,
                newsLoading: false,
                news: data.news
            };
        }

        case NEWS_ERROR: {
            return {
                ...state,
                authPending: false,
                error: action.error
            };
        }


        case NEWS_ADD: {
            const data = action.data;
            const newsArr = state.news;
            newsArr.push(data);
            return {
                ...state,
                newsLoading: false,
                news: newsArr
            };
        }

        default:
            return state;
    }
};

export default reducer;
