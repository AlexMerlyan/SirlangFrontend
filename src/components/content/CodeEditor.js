import React, {Component} from 'react';
import axios from 'axios';
import { Card, Jumbotron, Button } from 'react-bootstrap'

class CodeEditor extends Component {

    constructor(props) {
        super(props);
        this.url = props.url;
        this.endPoints = {
            compile: '/compile'
        };

        this.programText = 'Приветствую!\nСударь, будьте добры, выведите на экран это: "Моя первая программа на языке Сударь!"\nСпасибо вам! Всего хорошего!';

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
        return (
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
                <Jumbotron>
                    <label>
                        <textarea rows="8" cols="100" onChange={this.handleChange} />
                    </label>
                    <p>
                    <Button onClick={this.handleSubmit}>Запустить</Button>
                    </p>
                <h3>Результат выполнения программы:</h3>
                <p>
                    {this.state.consoleOutput}
                </p>
                </Jumbotron>
                
            </div>
        );
    }

}

export default CodeEditor