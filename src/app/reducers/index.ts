import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {User} from '../model/user.model';
import {storeFreeze} from 'ngrx-store-freeze';
import {routerReducer} from '@ngrx/router-store';


// tslint:disable-next-line: no-empty-interface
export interface AppState {

}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer
};





export const metaReducers: MetaReducer<AppState>[] =
  !environment.production ? [storeFreeze] : [];
