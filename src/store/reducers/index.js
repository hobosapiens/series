import { API_SEARCH, API_SHOW_INFO, API_SHOW_CAST } from '@/constants/api.js';
import { SET_SERIES, SET_SINGLE_SHOW, SET_LOADING, SET_ERROR } from '@/store/constants/actionTypes';
import { setSeries, setSingleShow, setLoading, setError } from '@/store/actions';
import { getAPIData } from '@/api/getAPIData';

const initialState = {
    series: [],
    singleShow: [],
    isLoading: false,
    isError: false,
};

const seriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SERIES:
            return {
                ...state,
                series: action.payload
            }
        case SET_SINGLE_SHOW:
            return {
                ...state,
                singleShow: action.payload
            }
        case SET_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        case SET_ERROR:
            return {
                ...state,
                isError: action.payload
            }
        default:
            return state;
    }
}

const mappedSeries = (series) => {
    return series.map(({show}) => ({
        'id': show.id,
        'name': show.name,
        'rating': show.rating.average,
        'image': show.image?.medium || null,
    }))
}

export const searchSeries = (query) => async (dispatch) => {
    dispatch(setLoading(true));
    const res = await getAPIData(API_SEARCH + query);

    if (!res) {
        dispatch(setLoading(false));
        dispatch(setError(true));
        return;
    }

    dispatch(setSeries(mappedSeries(res)));
    dispatch(setLoading(false));
}

const mappedSingleShow = (show) => {
    return ({
        'id': show.id,
        'image': show.image?.medium || null,
        'name': show.name,
        'rating': show.rating.average,
        'genres': show.genres,
        'summary': show.summary,
        'cast': show._embedded.cast,
    })
}

export const getSingleShow = (id) => async (dispatch) => {
    dispatch(setLoading(true));
    const res = await getAPIData(API_SHOW_INFO + id + API_SHOW_CAST);

    if (!res) {
        dispatch(setLoading(false));
        dispatch(setError(true));
        return;
    }

    dispatch(setSingleShow(mappedSingleShow(res)));
    dispatch(setLoading(false));
}

export default seriesReducer;