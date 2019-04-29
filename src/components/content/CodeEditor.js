import React, {Component} from 'react';
import axios from 'axios';
import { Jumbotron, Button } from 'react-bootstrap'
import Loader from './Loader'
import editorBackground from '../../assets/img/editor-bg.jpg';
import './СodeEditor.css';

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
    }
    
    handleChange = (event) => {
        console.log(this.consoleOutput);
        this.setState({ code: event.target.value });
    }
    
    handleSubmit = (event) => {
        const { code } = this.state;
        this.setState({ isLoading: true, consoleOutput: '' });
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
                consoleOutput: '',
                isLoading: false
            })
        });
    }
    
    render() {
        const { code, consoleOutput, isLoading } = this.state;
        return (
            <div style={containerStyle}>
                <Jumbotron>
                    <div style={{ position: 'relative', padding: 5 }}>
                        <label>
                            <textarea
                                style={textareaStyle}
                                rows="8"
                                cols="100"
                                value={code}
                                onChange={this.handleChange}
                            />
                        </label>
                        <p style={{ display: 'flex' }}>
                            <Button style={{ marginLeft: 'auto' }} type="button" onClick={this.handleSubmit}>Запустить</Button>
                        </p>
                        {isLoading && <Loader />}
                    </div>
                {consoleOutput && <div className={'highlight'} style={outputStyle}>
                    <h3>Результат выполнения программы:</h3>
                    <p>
                        {consoleOutput}
                    </p>
                </div>}
                </Jumbotron>
                
            </div>
        );
    }

}

export default CodeEditor

const containerStyle = {
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    minHeight: '100vh',
    backgroundImage: `url(${editorBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

const textareaStyle = {
    width: '100%',
    border: 'none',
    padding: '15px 20px',
    borderRadius: '5px',
    fontFamily: '"Lucida Console", Monaco, monospace'
}

const outputStyle = {
    padding: '4px 8px'
}
