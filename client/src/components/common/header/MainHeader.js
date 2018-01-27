import React from 'react';
import { Container, Dropdown, Image, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import renderAuth from './utils/renderAuth';

const MainHeader = (props) => {
  return (
    <Menu>
      <Container>
        <Menu.Item as="a" header>
          <Image size="mini" src="/logo.png" style={{ marginRight: '1.5em' }} />
          Grouper
        </Menu.Item>
        <Menu.Item as={Link} to="/">
          Home
        </Menu.Item>
        {/* Temporary for development */}
        <Menu.Item as={Link} to="/event-page">
          Event Page (test)
        </Menu.Item>
        <Menu.Item>{renderAuth(props.auth)}</Menu.Item>
        <Dropdown item simple text="Dropdown">
          <Dropdown.Menu>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Header Item</Dropdown.Header>
            <Dropdown.Item>
              <i className="dropdown icon" />
              <span className="text">Submenu</span>
              <Dropdown.Menu>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Menu>
  );
};

export default MainHeader;
