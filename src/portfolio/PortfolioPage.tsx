import { list, Nav, Actions } from "./components";

export const PortfolioPage = () => {
    return (
        <div className='portfolio'>
            <h1 className='logo'>
                logo
            </h1>
            <header className='header'>
                <Nav />
            </header>
            <div className='content'>
               {/* <list /> */}
            </div>
            <div className='actions'>
                {/*<Actions />*/}
            </div>
        </div>
    )
};

