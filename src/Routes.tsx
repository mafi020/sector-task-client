import { Switch, Route, Redirect } from 'react-router-dom';
import { Employees } from './pages/Employees';
import CreateEmployees from './pages/CreateEmployees';
export const Routes = () => (
  <Switch>
    <Route exact path='/' component={Employees} />
    <Route exact path='/create' component={CreateEmployees} />
    {/* <Route exact path='/404' component={NotFoundPage} /> */}
    <Redirect from='*' to='/404' />
  </Switch>
);
