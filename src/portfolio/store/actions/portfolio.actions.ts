import { Dispatch } from "redux";
import { DataModel } from "../reducers/settings.reducer";


export enum ActionTypes {
    ADD_DATA = '[Portfolio] ADD_DATA',
    SET_ACTINDEX = '[Portfolio] SET_ACTINDEX',
};

export interface AddDataAction {
    type: ActionTypes.ADD_DATA;
    data: DataModel[];
};

export interface SetActIndexAction {
    type: ActionTypes.SET_ACTINDEX,
    index: number;
}

export const addData = (data: DataModel[]) => (dispatch: Dispatch) => {
    return dispatch({ type: ActionTypes.ADD_DATA, data});
};

export const setAIndex = (index: number) => (dispatch: Dispatch) => {
    return dispatch({ type: ActionTypes.SET_ACTINDEX, index });
}

export type PortfolioActions = AddDataAction | SetActIndexAction;