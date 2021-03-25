import React from 'react';
import classes from '../BuildControls/BuildControls.css';
import BuildControl from './BuildControl/BuildControl';


const controls= [
    {  label: 'Salad',  type: 'salad' },
    {  label: 'Bacon',  type: 'bacon' },
    {  label: 'Cheese',  type: 'cheese' },
    {  label: 'Meat',  type: 'meat' }
];

const buildControls = (props)=>(
    <div className={classes.BuildControls}> 
        <strong>Current Price: {props.price.toFixed(2)}</strong>
        {controls.map(ctrl =>(
            <BuildControl 
            key={ctrl.label} 
            label={ctrl.label }
            added={ ()=>props.ingredientsAdded(ctrl.type)}
            removed={ ()=>props.ingredientsRemoved(ctrl.type)}/>
        ))}

        <button className={classes.OrderButton}
        disabled={!props.purchasable}
        onClick={props.ordered}>ORDER NOW!!</button>
        
    </div>
    
);

export default buildControls;