import { SET_SERIES, SET_SINGLE_SHOW } from '@/store/constants/actionTypes';

export const setSeries = series => ({
    type: SET_SERIES,
    payload: series
})

export const setSingleShow = show => ({
    type: SET_SINGLE_SHOW,
    payload: show
})