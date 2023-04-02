import { 
    SET_SERIES, SET_SINGLE_SHOW, 
    SET_LOADING, SET_ERROR 
} from '@/store/constants/actionTypes';
import { IShow, IShowDetailed } from './types';

enum ActionTypes {
    setSeries = SET_SERIES,
    setSingleShow = SET_SINGLE_SHOW,
    setLoading = SET_LOADING,
    setError = SET_ERROR,
  }  
  
  interface IActionSetSeries {
    type: ActionTypes.setSeries;
    payload: IShow[]
  }

  interface IActionSetSingleShow {
    type: ActionTypes.setSingleShow;
    payload: IShowDetailed;
  }

  interface IActionSetLoading {
    type: ActionTypes.setLoading;
    payload: boolean;
  }

  interface IActionSetError {
    type: ActionTypes.setError;
    payload: boolean;
  }

 export type IAction = IActionSetSeries | IActionSetSingleShow | IActionSetLoading | IActionSetError