import { Reducer } from "redux";
import { PortfolioActions, ActionTypes } from '../actions/portfolio.actions';

export interface State {
    data: { [id: number]: DataModel};
    actIndex: number;
};

const initialState: State = {
    data: {},
    actIndex: 0,
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
        case ActionTypes.SET_ACTINDEX: {
            return {
                ...state,
                actIndex: action.index,
            }
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