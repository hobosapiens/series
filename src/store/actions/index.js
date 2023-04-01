import { 
    SET_SERIES, SET_SINGLE_SHOW, 
    SET_LOADING, SET_ERROR 
} from '@/store/constants/actionTypes';

export const setSeries = series => ({
    type: SET_SERIES,
    payload: series
})

export const setSingleShow = show => ({
    type: SET_SINGLE_SHOW,
    payload: show
})

export const setLoading = loading => ({
    type: SET_LOADING,
    payload: loading
})

export const setError = error => ({
    type: SET_ERROR,
    payload: error
})