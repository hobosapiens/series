import { API_SEARCH, API_SHOW_INFO, API_SHOW_CAST } from '@/constants/api.js';
import { SET_SERIES, SET_SINGLE_SHOW, SET_LOADING, SET_ERROR } from '@/store/constants/actionTypes';
import { setSeries, setSingleShow, setLoading, setError } from '@/store/actions';
import { getAPIData } from '@/api/getAPIData';
import { 
    IServerDataShowDetailed, IServerDataShowResult, 
    IShow, IShowDetailed, IState 
} from '@/types/types'
import { Dispatch } from 'react';
import { IAction } from '@/types/actions';
import { Action } from '@reduxjs/toolkit';
 
const initialState: IState = {
    series: [],
    singleShow: null,
    isLoading: false,
    isError: false,
};

const seriesReducer = (state: IState = initialState, action: IAction) => {
    switch (action.type) {
        case SET_SERIES:
            return { ...state, series: action.payload }
        case SET_SINGLE_SHOW:
            return { ...state, singleShow: action.payload }
        case SET_LOADING:
            return { ...state, isLoading: action.payload }
        case SET_ERROR:
            return { ...state, isError: action.payload }
        default:
            return state;
    }
}

const mappedSeries = (series: IServerDataShowResult[]): IShow[] => {
    return series.map(({show}) => ({
        'id': show.id,
        'name': show.name,
        'rating': show.rating?.average || null,
        'image': show.image?.medium || null,
    }))
}

export const searchSeries = (query: any): any => async (dispatch: Dispatch<Action>) => {
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

const mappedSingleShow = (show: IServerDataShowDetailed): IShowDetailed => {
    const cast = show._embedded.cast.map(show => {
        return {
            'name': show.person.name,
            'character': show.character.name,
            'photo': show.person.image?.medium || null,
        }
    })

    return ({
        'id': show.id,
        'image': show.image?.medium || null,
        'name': show.name,
        'rating': show.rating?.average || null,
        'genres': show.genres,
        'summary': show.summary,
        'cast': cast
    })
}

export const getSingleShow = (id: any): any => async (dispatch: Dispatch<Action>) => {
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