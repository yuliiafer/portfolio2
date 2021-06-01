import { Reducer } from "redux";
import { PortfolioActions, ActionTypes } from '../actions/portfolio.actions';

export interface State {
    data: { [id: number]: DataModel};
    index: number;
};

const initialState: State = {
    data: {},
    index: 0,
};

export const settingsReducer: Reducer<State, PortfolioActions> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case ActionTypes.ADD_DATA: {
            return {
                ...state,
                data: action.data.reduce (
                    (entities: { [id: number]: DataModel}, data) => {
                        return {
                            ...entities,
                            [data.id]: data,
                        }
                    },
                    {
                        ...state.data,
                    }
                ),
            };
        }
        default:
            return state;
    }
};

export interface DataModel {
    id: number;
    title: string;
    imageUrl: string;
}