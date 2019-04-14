import React, {Component} from 'react';
import { Button, Modal, modalClose, Nav, Navbar, NavDropdown } from 'react-bootstrap'

class ExampleCodeModal extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        show: props.show,
        header: props.header,
        content: props.content
    }

    console.log(this.state);
    console.log(props);
  }

  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          Факториал числа
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Приветствую!<br/>
          Сударь, будьте добры, запомните это как результат: 1<br/>
          Сударь, будьте любезны, повторите количество раз: 4<br/>
          Сударь, будьте добры, запомните это как результат: результат * (счетчик1 + 1)<br/>
          Благодарю вас!<br/>
          Сударь, будьте добры, выведите на экран это: результат<br/>
          Спасибо вам! Всего хорошего!<br/> 
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ExampleCodeModal