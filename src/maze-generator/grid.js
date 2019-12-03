import React from 'react';
import Box from './box'

class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {brand: "Ford"};
    }

    handleClick(x) {
        this.style.color = "red";
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