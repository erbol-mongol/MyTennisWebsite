import React , {Component} from 'react';
import module from './Account.module.css';

const INITIAL_STATE = {
    
}

class Account extends Component{
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
      }



    render(){
        return(
            <div className = {module.Account__container}>
                d
            </div>
        )
    }
}