import React from 'react';
import './Split.css';

function Split(props) {
   const combinedClassName = `split ${props.className}`;
   const newStyles = { flex: props.flexBasis };
    return (
        <div className= {combinedClassName}
        style={newStyles}
        >
           {props.children}
        </div>
        );

}
// so this is the orginal SPlit so when you see the <Split> </Split> in App.js that is a child of the Split that was exported
//props is going to look for where the Spli component is being used outside of the component

export default Split;