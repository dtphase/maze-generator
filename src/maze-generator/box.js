import React from 'react';

class Box extends React.Component {
    constructor(props) {
        super(props);
        this.state = {color: "red"};
    }

    handleClick(x) {
        this.setState({color: "blue"});
    }

    render(){
        return(<span className="box" id={this.props.x} onClick={(e) => this.handleClick(this.props.x)} style={{color: this.state.color}}>{this.props.x}</span>);
    }
}

export default Box;