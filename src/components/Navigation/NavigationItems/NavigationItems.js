import React, { useState } from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = ( props ) => {
    
   
     return(
    
    <ul className={classes.NavigationItems}>
     
        {!props.isAuthenticated ?
             <NavigationItem link="/auth">Sign in</NavigationItem>
            :  <NavigationItem link="/flights"> Flights</NavigationItem>}

       { (!props.isAuthenticated)?
             <NavigationItem link="/login"> Log in</NavigationItem>
             : (<NavigationItem link="/logout">Logout</NavigationItem>)}
        { (props.isAdmin)?
             <NavigationItem link="/newFlight" > Create flight</NavigationItem>
            :null}
            
       { (!props.isAdmin && props.isAuthenticated )?
             <NavigationItem link="/mytickets" > My tickets</NavigationItem>
            :null}
       
    </ul>
);
        };
export default navigationItems;