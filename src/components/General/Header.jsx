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
            <h1 className="text-xl">
              <b>GeniusGrid</b>
            </h1>
          </NavbarBrand>
          <NavbarContent display={{ base: "hidden", sm: "flex" }}>
            <NavbarItem>
              <NavbarLink isActive color="foreground" href="#">
                Home
              </NavbarLink>
              <NavbarLink color="foreground" href="#">
                Features
              </NavbarLink>
            </NavbarItem>
            <NavbarItem>
              <NavbarLink color="secondary" href="#">
                About
              </NavbarLink>
            </NavbarItem>
            <NavbarItem>
              <NavbarLink color="foreground" href="#">
                Contact
              </NavbarLink>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent as="div" justifyContent="end">
            <Menu>
              <MenuButton>
                <PersonaAvatar
                  src="/showcase-avatar.jpg"
                  name="Beatriz"
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
