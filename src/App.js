import { useContext, useEffect } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { RewardStoreContext } from './contexts/context';
import { Route, Switch } from 'react-router';

import { Layout } from './components';
import Home from './pages/home';
import UserProfile from './pages/userProfile';

export default function App() {
  const { getUser } = useContext(RewardStoreContext);

  useEffect(() => {
    getUser();
  }, [getUser]);

  return (
    <Router>
      <Switch>
        <Layout>
          <Route exact path="/" component={Home} />
          <Route path="/user" component={UserProfile} />
        </Layout>
      </Switch>
    </Router>
  );
}
