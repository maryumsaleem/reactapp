import { Component } from "react";
class Forprops extends Component{
    render(){
       return  <h5>Message: {this.props.message}. Message: {this.props.messageCode}</h5>;
    }

}
export default Forprops;