import { Switch, Route, Redirect } from 'react-router-dom';
import { Employees } from './pages/Employees';
export const Routes = () => (
  <Switch>
    <Route exact path='/' component={Employees} />
    <Redirect from='*' to='/404' />
  </Switch>
);
