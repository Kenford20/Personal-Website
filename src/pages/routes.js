import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './home';
import Education from './education';
import Fitness from './fitness';
import Gaming from './gaming';
import Sports from './sports';
import Whoops404 from './whoops';

export default () => (
  <BrowserRouter>
  	<Switch>
	    <Route exact path='/' component={Home} />
	    <Route path='/education'component={Education} />
	    <Route path='/fitness' component={Fitness} />
	    <Route path='/gaming' component={Gaming} />
	    <Route path='/sports' component={Sports} />
	    <Route component={Whoops404}/>
    </Switch>
 </BrowserRouter>
);