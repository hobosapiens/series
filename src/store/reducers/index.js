import { API_SEARCH, API_SHOW_INFO, API_SHOW_CAST } from '@/constants/api.js';
import { SET_SERIES, SET_SINGLE_SHOW } from '@/store/constants/actionTypes';
import { setSeries, setSingleShow } from '@/store/actions';
import { getAPIData } from '@/api/getAPIData';

const initialState = {
    series: [],
    singleShow: []
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

export const searchSeries = (query, state = initialState) => async (dispatch) => {
    const res = await getAPIData(API_SEARCH + query);

    if (!res) {
        console.log('Error with searching!');
        return;
    }

    dispatch(setSeries(mappedSeries(res)));
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

export const getSingleShow = (id, state = initialState) => async (dispatch) => {
    const res = await getAPIData(API_SHOW_INFO + id + API_SHOW_CAST);

    if (!res) {
        console.log('Error to get single show!');
        return;
    }

    dispatch(setSingleShow(mappedSingleShow(res)));
}

export default seriesReducer;