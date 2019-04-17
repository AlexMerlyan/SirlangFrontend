import React, {Component} from 'react';
import axios from 'axios';
import { Jumbotron, Button } from 'react-bootstrap'
import Loader from './Loader'

const defaultCode = `Приветствую!
Сударь, будьте добры, выведите на экран это:"Моя первая программа на языке Сударь!"
Спасибо вам! Всего хорошего!`;

class CodeEditor extends Component {

    constructor(props) {
        super(props);
        this.url = props.url;
        this.endPoints = {
            compile: '/compile'
        };

        this.state = {
            code: defaultCode,
            consoleOutput: '',
            isLoading: false
        }
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        console.log(this.consoleOutput);
        this.setState({ code: event.target.value });
    }
    
    handleSubmit(event) {
        const { code } = this.state;
        this.setState({ isLoading: true });
        var data = {
            sirlangCode: code
        };
        var compileUrl = this.url + this.endPoints.compile;
        console.log(data);
        console.log(compileUrl);
        axios.post(compileUrl, data).then(response => {
            this.setState({
                consoleOutput: response.data.consoleOutput,
                isLoading: false
            })
        }).catch(e => {
            alert('Compilation was failed');
            this.setState({
                isLoading: false
            })
        });
    }
    
    render() {
        const { code, consoleOutput, isLoading } = this.state;
        return (
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
                <Jumbotron>
                    <div style={{ position: 'relative', padding: 5 }}>
                        <label>
                            <textarea
                                style={{ width: '100%' }}
                                rows="8"
                                cols="100"
                                value={code}
                                onChange={this.handleChange}
                            />
                        </label>
                        <p>
                        <Button type="button" onClick={this.handleSubmit}>Запустить</Button>
                        </p>
                        {isLoading && <Loader />}
                    </div>
                <h3>Результат выполнения программы:</h3>
                <p>
                    {consoleOutput}
                </p>
                </Jumbotron>
                
            </div>
        );
    }

}

export default CodeEditor
