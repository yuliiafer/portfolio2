import { useEffect, useState } from 'react';
import { Ellist, Nav, Actions } from "./components";
import { useSelector, useDispatch } from 'react-redux';

import { addData } from "./store/actions/portfolio.actions";

import { AppState } from "../store";
import { data } from '../data';

export const PortfolioPage = () => {
    const [cIndex, setCIndex] = useState<number>(0);
    const [disabled, setDisabled] = useState<boolean>(false);

    const portfolioData = useSelector((state: AppState) => 
        Object.keys(state.portfolio.portfSettings.data).map(
            (ids) => state.portfolio.portfSettings.data[parseInt(ids, 10)]
        )
    );

    const dispatch = useDispatch();

    useEffect (() => {
        dispatch(addData(data));
    }, []);

    const handleNext = () => {

    }

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
                next={handleNext}
                currIndex={cIndex}
                disabled={disabled}
                length={portfolioData.length} />
            </div>
        </div>
    )
};

