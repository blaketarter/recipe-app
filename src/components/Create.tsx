import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PageWrapper from './PageWrapper';
import TopBar from './TopBar';
import CreateStep1 from './CreateStep1';
import CreateStep2 from './CreateStep2';

const Create: React.SFC = () => {
    return (
      <PageWrapper>
        <TopBar shadowOnScroll={true} title='Add New Recipe' />
        <Switch>
          <Redirect exact={true} from='/create' to='/create/1'/>
          <Route path="/create/1" component={CreateStep1} />
          <Route path="/create/2" component={CreateStep2} />
        </Switch>
      </PageWrapper>
    );
}

export default Create;
