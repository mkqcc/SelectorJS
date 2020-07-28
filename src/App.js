import React, {Component} from 'react';
import Shape from "./Shape";

class Selector extends Component {
    constructor() {
        super()
        this.state = {
            selectedShape: '',
            countedShapes: {},
        }
    }

    render() {
        return (
            <div className="container">
                <div className="navbar">
                    <div>Selected:</div>
                    <div>{this.state.selectedShape}</div>
                </div>
                <div className="shape-list">
                    <Shape shape="square" selectShape={this.selectShape}
                           onClick={this.update(this.state.selectedShape)}/>
                    <Shape shape="circle" selectShape={this.selectShape}
                           onClick={this.update(this.state.selectedShape)}/>
                    <Shape shape="triangle" selectShape={this.selectShape}
                           onClick={this.update(this.state.selectedShape)}/>
                    <Shape shape="oval" selectShape={this.selectShape} onClick={this.update(this.state.selectedShape)}/>
                    <Shape shape="trapezium" selectShape={this.selectShape}
                           onClick={this.update(this.state.selectedShape)}/>
                </div>
                <div className="footer">
                    <ul>
                        <li>Square count is {this.state.countedShapes['Square']}</li>
                        <li>Circle count is {this.state.countedShapes['Circle']}</li>
                        <li>Triangle count is {this.state.countedShapes['Triangle']}</li>
                        <li>Oval count is {this.state.countedShapes['Oval']}</li>
                        <li>Trapezium count is {this.state.countedShapes['Trapezium']}</li>
                    </ul>
                </div>
            </div>
        )
    }

    selectShape = shapeName => {
        this.setState({
            selectedShape: shapeName[0].toUpperCase() + shapeName.slice(1)
        })
    }

    update = s => {
        let counted = Object.assign({}, this.state)
        if (this.state.countedShapes[s] === undefined) {
            counted[s] = 0
            console.log(counted)
            this.setState({countedShapes: counted})
        } else {
            console.log(counted[s], s)
            // this.setState({countedShapes: counted})
        }
    }
}

export default Selector