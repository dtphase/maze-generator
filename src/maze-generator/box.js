import React from 'react';
import '../App.css';

class Box extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "red",
            size: "30px",
        };
    }

    handleClick(x) {
        this.setState({color: "blue"});
    }

    render(){
        return(
        <span className="box" 
        id={this.props.x} 
        onClick={(e) => this.handleClick(this.props.x)} 
        style={{color: this.state.color, 
                height: this.state.size,
                width: this.state.size}}>
            {this.props.x}
        </span>
        );
    }
}

export default Box;