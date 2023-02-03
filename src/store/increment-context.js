import {createStore} from 'redux';

const couterReducer=(state={counter:0},action)=>{

    if (action.type==='increment'){
        return{
            counter:state.counter+5,
        }
    }
    if (action.type==='decrement'){
        return{
            counter:state.counter-5,
        }
    }
    return state;
}
const store=createStore(couterReducer);

export default store;