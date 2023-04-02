import { 
    SET_SERIES, SET_SINGLE_SHOW, 
    SET_LOADING, SET_ERROR 
} from '@/store/constants/actionTypes';
import { IShow, IShowDetailed } from '@/types/types';

export const setSeries = (series: IShow[]) => ({
    type: SET_SERIES,
    payload: series
})

export const setSingleShow = (show: IShowDetailed) => ({
    type: SET_SINGLE_SHOW,
    payload: show
})

export const setLoading = (loading: boolean) => ({
    type: SET_LOADING,
    payload: loading
})

export const setError = (error: boolean) => ({
    type: SET_ERROR,
    payload: error
})