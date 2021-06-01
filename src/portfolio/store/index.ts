import { combineReducers } from 'redux';
import * as fromPortfolio from './reducers/settings.reducer' ;

export interface PortfolioState {
    Settings: fromPortfolio.State
};

export const portfolioReducers = combineReducers<PortfolioState>({
    Settings: fromPortfolio.settingsReducer
});