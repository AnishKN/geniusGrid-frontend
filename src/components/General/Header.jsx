import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarLink,
  PersonaAvatar,
} from "@saas-ui/react";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuGroup,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Header = ({ hideNavbar }) => {
  if (hideNavbar) {
    return null;
  }

  return (
    <>
      <Navbar
        position="sticky"
        background="transparent"
        backdropFilter="blur(10px)"
        borderBottomWidth="1px"
      >
        <NavbarBrand>
          <NavLink className={'h-full'} to="/">
            <img className="h-full p-2 mix-blend-multiply bg-transparent" src="/GG_logo-removebg-preview.png" alt="GeniusGrid" />
          </NavLink>
        </NavbarBrand>
        <NavbarContent display={{ base: "hidden", sm: "flex" }}>
          <NavbarItem>
          <NavLink to="/">
            <NavbarLink isActive color="foreground">
              Home
            </NavbarLink>
            </NavLink>
            <NavLink to="/features">
            <NavbarLink color="foreground" href="#">
              Features
            </NavbarLink>
            </NavLink>
          </NavbarItem>
          <NavbarItem>
          <NavLink to="/about">
            <NavbarLink color="secondary" href="#">
              About
            </NavbarLink>
            </NavLink>
          </NavbarItem>
          <NavbarItem>
          <NavLink to="/contact">
            <NavbarLink color="foreground" href="#">
              Contact
            </NavbarLink>
            </NavLink>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent as="div" justifyContent="end">
          <Menu>
            <MenuButton>
              <PersonaAvatar
                src="/showcase-avatar.jpg"
                name="Likhitha"
                size="xs"
                presence="online"
              />
            </MenuButton>
            <MenuList>
              <MenuGroup title="beatriz@saas-ui.dev">
                <MenuItem>Profile</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuItem>Help &amp; feedback</MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuItem>Log out</MenuItem>
            </MenuList>
          </Menu>
        </NavbarContent>
      </Navbar>
    </>
  );
};

export default Header;
