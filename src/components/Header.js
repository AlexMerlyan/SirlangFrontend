import React, {Component} from 'react';
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap'

class Header extends Component {

  constructor(props) {
      super(props);
      this.showAlertGoHomeAndRedirect = this.showAlertGoHomeAndRedirect.bind(this);
  }

  showAlertGoHomeAndRedirect() {
    alert("Иди домой, бог программирования");
    window.location = 'https://www.google.com/search?ei=Lw-qXK6tOIudkwXMhoLgDg&q=%D0%BA%D0%B0%D0%BA+%D0%BF%D0%BE%D0%BF%D0%B0%D1%81%D1%82%D1%8C+%D0%B4%D0%BE%D0%BC%D0%BE%D0%B9&oq=%D0%BA%D0%B0%D0%BA+%D0%BF%D0%BE%D0%BF%D0%B0%D1%81%D1%82%D1%8C+%D0%B4%D0%BE%D0%BC%D0%BE%D0%B9&gs_l=psy-ab.3..35i39j0l9.4018.14394..14490...29.0..3.140.2891.11j17......0....1..gws-wiz.....6..0i71j0i1j0i131i10i1j0i10i1j0i131j0i67j0i3.EWNsLKYBXeY';
  }

  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="https://github.com/AlexMerlyan/SirLang" target="_blank">Github</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">Фичи</Nav.Link>
          <NavDropdown title="Примеры программ" id="collasible-nav-dropdown">
            <NavDropdown.Item>Вывод в консоль</NavDropdown.Item>
            <NavDropdown.Item>Программа с условием</NavDropdown.Item>
            <NavDropdown.Item>Факториал числа</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={this.showAlertGoHomeAndRedirect}>Я БОГ ПРОГРАММИРОВАНИЯ ЗАЧЕМ МНЕ ПРИМЕРЫ</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link onClick={() => alert("Дополнительная инфа? Серьезно? У тебя уже есть целых ТРИ ПРИМЕРА ИДЕАЛЬНОГО КОДА!")}>Дополнительная инфа</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
  }
}

export default Header