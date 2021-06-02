import { combineReducers } from 'redux';
import * as fromPortfolio from './reducers/settings.reducer' ;

export interface PortfolioState {
    portfSettings: fromPortfolio.State;
};

export const portfolioReducers = combineReducers<PortfolioState>({
    portfSettings: fromPortfolio.settingsReducer,
});