import React, {Component} from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import ExampleCodeModal from './content/ExampleCodeModal.js'

class Header extends Component {

  constructor(props) {
      super(props);
      this.state = { 
        modalShow: false, 
    };
  }

  showAlertGoHomeAndRedirect() {
    alert("Иди домой, бог программирования");
    window.location = 'https://www.google.com/search?ei=Lw-qXK6tOIudkwXMhoLgDg&q=%D0%BA%D0%B0%D0%BA+%D0%BF%D0%BE%D0%BF%D0%B0%D1%81%D1%82%D1%8C+%D0%B4%D0%BE%D0%BC%D0%BE%D0%B9&oq=%D0%BA%D0%B0%D0%BA+%D0%BF%D0%BE%D0%BF%D0%B0%D1%81%D1%82%D1%8C+%D0%B4%D0%BE%D0%BC%D0%BE%D0%B9&gs_l=psy-ab.3..35i39j0l9.4018.14394..14490...29.0..3.140.2891.11j17......0....1..gws-wiz.....6..0i71j0i1j0i131i10i1j0i10i1j0i131j0i67j0i3.EWNsLKYBXeY';
  }

  render() {
    let modalClose = () => this.setState({ modalShow: false });
    return (
      <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="https://github.com/AlexMerlyan/SirLang" target="_blank">Github</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link onClick={() => alert('Здесь могла бы быть ваша реклама')}>Фичи</Nav.Link>
          <NavDropdown title="Примеры программ" id="collasible-nav-dropdown">
            <NavDropdown.Item variant="primary" onClick={() => this.setState({ modalShow: true})}>Факториал числа</NavDropdown.Item>
            <NavDropdown.Item href="https://github.com/AlexMerlyan/SirLang/tree/master/src/main/res/print_examples" target="_blank">Еще примеры</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={this.showAlertGoHomeAndRedirect}>Я БОГ ПРОГРАММИРОВАНИЯ ЗАЧЕМ МНЕ ПРИМЕРЫ</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link onClick={() => alert("Дополнительная инфа? Серьезно? У тебя уже есть ПРИМЕРЫ ИДЕАЛЬНОГО КОДА!")}>Дополнительная инфа</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Navbar>
      <ExampleCodeModal show={this.state.modalShow} onHide={modalClose} ></ExampleCodeModal>
      </div>
    );
  }
}

export default Header
