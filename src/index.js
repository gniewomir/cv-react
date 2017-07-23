import React from 'react';
import { render } from 'react-snapshot';

import { Route, Switch } from 'react-router';
import history from './service/history';
import { ConnectedRouter } from 'react-router-redux';

import { Provider } from 'react-redux';
import configureStore from './service/store';

import './index.css';

import Error404 from './component/Error404';

import registerServiceWorker from './registerServiceWorker';

import Header from './component/Header';
import SkillTable from './component/SkillTable';
import Contact from './component/Contact';
import Menu from './component/Menu';

render(
    <Provider store={configureStore()}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path="/" children>
                    <div>
                        <Menu />
                        <Header />
                        <SkillTable />
                        <Contact />
                    </div>
                </Route>
                <Route exact path="/skills" children>
                    <div>
                        <SkillTable />
                        <Contact />
                    </div>
                </Route>
                <Route exact path="/contact" children>
                    <div>
                        <Contact />
                    </div>
                </Route>
                <Route component={Error404} />
            </Switch>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
