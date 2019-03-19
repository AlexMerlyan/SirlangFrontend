import React, {Component} from 'react';
import axios from 'axios';

class CodeEditor extends Component {

    constructor(props) {
        super(props);
        this.url = props.url;
        this.endPoints = {
            compile: '/compile'
        };

        this.state = {
            consoleOutput: ''
        }
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        console.log(this.consoleOutput);
        this.code = event.target.value;
    }
    
    handleSubmit(event) {
        event.preventDefault();
        var data = {
            sirlangCode: this.code
        };
        var compileUrl = this.url + this.endPoints.compile;
        axios.post(compileUrl, data).then(response => {
            this.setState({
                consoleOutput: response.data.consoleOutput
            })
        });
    }
    
    render() {
        console.log('It was alert from render');
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <textarea onChange={this.handleChange} />
                </label>
                <input type="submit" value="Run" />
                <label>Console output: {this.state.consoleOutput}</label>
            </form>
        );
    }

}

export default CodeEditor