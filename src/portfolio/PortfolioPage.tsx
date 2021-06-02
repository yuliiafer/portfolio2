import { useEffect } from 'react';
import { Ellist, Nav, Actions } from "./components";
import { useSelector, useDispatch } from 'react-redux';

import { addData } from "./store/actions/portfolio.actions";

import { AppState } from "../store";
import { data } from '../data';

export const PortfolioPage = () => {
    const portfolioData = useSelector((state: AppState) => 
        Object.keys(state.portfolio.portfSettings.data).map(
            (ids) => state.portfolio.portfSettings.data[parseInt(ids, 10)]
        )
    );

    const dispatch = useDispatch();

    useEffect (() => {
        dispatch(addData(data));
    }, []);

    return (
        <div className='portfolio'>
            <h1 className='logo'>
                logo
            </h1>
            <header className='header'>
                <Nav />
            </header>
            <div className='content'>
               {portfolioData.map((data) => (
                   
                   <Ellist key={data.id} data={data} />
               ))}
            </div>
            <div className='actions'>
                <Actions 
                next={() => {}}
                currIndex={0}
                disabled={false}
                length={portfolioData.length} />
            </div>
        </div>
    )
};

