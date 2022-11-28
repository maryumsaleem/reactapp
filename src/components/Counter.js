//class component using state
import {Component} from "react";
class Counter extends Component{
    //state is an object u need to initialize a state object inside a constructor
    constructor(){
        super();
        this.state={
            counter:0,
        };

}
//You cannot directly change the value of state using state, to access the value of state you have to use this.setState method
increment(){
this.setState({
    counter:this.state.counter+1,
});
}

decrement(){
    this.setState({
        counter:this.state.counter-1,
    });
}
    render(){
        return(
            <div>
                 <h1>This is counter component <br/> current count value is: {this.state.counter} </h1>
                 <button onClick={()=>this.increment()}>Increment</button>
                 <button onClick={()=>this.decrement()}>Decrement</button>
            </div>
        );
    }
}

export default Counter;