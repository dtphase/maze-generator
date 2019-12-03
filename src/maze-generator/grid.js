import React from 'react';
import Box from './box'

class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {width: 0, height: 0};
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    handleClick(x) {
        this.style.color = "red";
    }
    
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    populateGrid() {
        let gri = [];

        for(let x = 0; x < 50; x++) {
            gri.push(<Box x={x} />);
        }
        return gri;
    }

    render(){
      return this.populateGrid();
    }
}

export default Grid;