import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {User} from '../model/user.model';
import {AuthActions, AuthActionTypes} from '../auth/auth.actions';


export interface AppState {

}

export const reducers: ActionReducerMap<AppState> = {



};


export const metaReducers: MetaReducer<AppState>[] =
  !environment.production ? [] : [];
