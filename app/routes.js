import React from 'react';
import {Route,
        Redirect,
        IndexRoute } from 'react-router-3';

import Layout from './components/Layout';
import Collection from './components/Collection';
import Show from './components/Show';


const routes =

   <Route>
    <Redirect from='/' to='/contacts' />
   
   <Route path='contacts' component={Layout} >
     <IndexRoute component={Collection} />
       <Route path=':contactId' component={Show} />

    
    </Route> 

   </Route>;




export default routes;   