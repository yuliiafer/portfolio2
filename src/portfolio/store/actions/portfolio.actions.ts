import { Dispatch } from "redux";
import { DataModel } from "../reducers/settings.reducer";


export enum ActionTypes {
    ADD_DATA = '[Portfolio] ADD_DATA',
};

export interface AddAction {
    type: ActionTypes.ADD_DATA;
    data: DataModel[];
};

export const addData = (data: DataModel[]) => (dispatch: Dispatch) => {
    return dispatch({ type: ActionTypes.ADD_DATA, data});
};

export type PortfolioActions = AddAction;