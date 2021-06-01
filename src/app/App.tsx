import { Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { PortfolioPage } from '../portfolio/PortfolioPage';


function App() {
  return (
    <Fragment>
      <Route exact path='/'>
        <Redirect to= '/portfolio' />
      </Route>
      <Switch>
        <Route path='/portfolio' component={PortfolioPage} />
      </Switch>
    </Fragment>
  );
}

export default App;
