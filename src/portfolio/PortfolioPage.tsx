/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState, useRef } from 'react';
import { Ellist, Nav, Actions } from "./components";
import { useSelector, useDispatch } from 'react-redux';

import { addData } from "./store/actions/portfolio.actions";

import { AppState } from "../store";
import { data } from '../data';

export const PortfolioPage = () => {
    const [cIndex, setCIndex] = useState<number>(0);
    const [disabled, setDisabled] = useState<boolean>(false);
    const portfolioListContainer = useRef<HTMLDivElement>(null);
    const actionsContainer = useRef<HTMLDivElement>(null);
    const portfolioData = useSelector((state: AppState) => 
        Object.keys(state.portfolio.portfSettings.data).map(
            (ids) => state.portfolio.portfSettings.data[parseInt(ids, 10)]
        )
    );

    const actIndex = useSelector(
        (state: AppState) => state.portfolio.portfSettings.actIndex
    );
    
    const dispatch = useDispatch();

    useEffect (() => {
        dispatch(addData(data()));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleNext = () => {

    }

    const sizes = (): any => {
        return {
            elementWidth: 
                portfolioListContainer.current?.children &&
                portfolioListContainer.current.children[0].getBoundingClientRect()
                .width,
            elementHeight: 
                portfolioListContainer.current?.getBoundingClientRect()
                .height,
            actionsHeight:
                actionsContainer.current &&
                actionsContainer.current.getBoundingClientRect().height,
        };
    };

    const listExists = (): boolean | null => {
        return (
            portfolioListContainer.current &&
            portfolioListContainer.current.children &&
            portfolioListContainer.current.children.length > 0
        );
    };

    const elementList = (): HTMLElement[] | undefined => {
        if(listExists()) {
            return Array.prototype.slice.call(
                portfolioListContainer.current?.children
            );
        };
    };

    const getActiveEl = () => {
        let actElObj = {} as {
            activeEl: HTMLElement,
            index: number
        };
        elementList()?.forEach((el, index) => {
            if(el && el.classList && el.classList.contains('active')) {
                actElObj = {
                ...actElObj,
                activeEl: el,
                index,
            };
        }
        });
        return actElObj;
    }

    return (
        <div className='portfolio'>
            <h1 className='logo'>
                logo
            </h1>
            <header className='header'>
                <Nav />
            </header>
            <div className='content' ref={portfolioListContainer}>
               {portfolioData.map((data) => (
                   
                   <Ellist key={data.id} data={data} />
               ))}
            </div>
            <div className='actions' ref={actionsContainer}>
                <Actions 
                next={handleNext}
                currIndex={cIndex}
                disabled={disabled}
                length={portfolioData.length} />
            </div>
        </div>
    )
};

