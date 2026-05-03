import {useReducer} from 'react';

function Calculation(value,action){
    if(action === '+')
        return value+1;
    else if(action === '-')
        return value-1;
    else if(action === 'reset')
        return 0;
    else return 'Not Found';
    
}

export default function App2(){
    const [value,dispatch] = useReducer(Calculation,0);

    return(<>
        <button onClick={()=>dispatch('+')}>+</button>    
        <button onClick={()=>dispatch('-')}>-</button>    
        <button onClick={()=>dispatch('reset')}>Reset</button>    
        <h3>{value}</h3>
    </>);
}
