import React from 'react';
import {render} from "react-dom";
import Markup from './Markup';


const App =()=>{
    return(
        <Markup/>
    )
}
render(<App/>, document.getElementById("root"))