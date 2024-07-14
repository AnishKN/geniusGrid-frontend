import React, { useState } from "react";
import { useLocation, NavLink } from "react-router-dom";
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
  Button,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const Header = ({ hideNavbar }) => {
  const location = useLocation();
  const isIndexPath = location.pathname === "/";

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (hideNavbar) {
    return null;
  }

  return (
    <Navbar
      position="sticky"
      background="transparent"
      backdropFilter="blur(10px)"
      borderBottomWidth="1px"
      className="flex items-center justify-between px-4 sm:px-6 lg:px-8"
    >
      <NavbarBrand>
        <NavLink className="h-full" to="/">
          <img
            className="h-full p-2 mix-blend-multiply bg-transparent"
            src="/lg-white.png"
            alt="GeniusGrid"
          />
        </NavLink>
      </NavbarBrand>
      <div className="flex items-center">
        <NavbarContent display={{ base: "none", sm: "flex" }}>
          <NavbarItem>
            <NavLink to="/">
              <NavbarLink isActive={location.pathname === "/"} color="foreground">
                Home
              </NavbarLink>
            </NavLink>
            <NavLink to="/features">
              <NavbarLink color="foreground">
                Features
              </NavbarLink>
            </NavLink>
            <NavLink to="/about">
              <NavbarLink color="secondary">
                About
              </NavbarLink>
            </NavLink>
            <NavLink to="/contact">
              <NavbarLink color="foreground">
                Contact
              </NavbarLink>
            </NavLink>
          </NavbarItem>
        </NavbarContent>

        {isIndexPath ? (
          <NavbarContent as="div" display={{ base: "none", sm: "flex" }} justifyContent="end">
            <NavLink to="/login">
              <Button colorScheme="" className="bg-blue-700" mr="4">
                Try for free
              </Button>
            </NavLink>
          </NavbarContent>
        ) : (
          <NavbarContent as="div" display={{ base: "none", sm: "flex" }} justifyContent="end">
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
                <MenuGroup title="likhitha123@gmail.com">
                  <MenuItem>Profile</MenuItem>
                  <MenuItem>Settings</MenuItem>
                  <MenuItem>Help &amp; feedback</MenuItem>
                </MenuGroup>
                <MenuDivider />
                <MenuItem>Log out</MenuItem>
              </MenuList>
            </Menu>
          </NavbarContent>
        )}
        <IconButton
          aria-label="Open menu"
          icon={<HamburgerIcon />}
          display={{ base: "flex", sm: "none" }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>
      {isMenuOpen && (
        <div className="sm:hidden absolute top-full left-0 right-0 bg-white shadow-md p-4 z-50">
          <NavbarContent className="flex flex-col items-start">
            <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
              <NavbarLink isActive={location.pathname === "/"} color="foreground">
                Home
              </NavbarLink>
            </NavLink>
            <NavLink to="/features" onClick={() => setIsMenuOpen(false)}>
              <NavbarLink color="foreground">
                Features
              </NavbarLink>
            </NavLink>
            <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>
              <NavbarLink color="secondary">
                About
              </NavbarLink>
            </NavLink>
            <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>
              <NavbarLink color="foreground">
                Contact
              </NavbarLink>
            </NavLink>
            {isIndexPath && (
              <NavLink to="/login" onClick={() => setIsMenuOpen(false)}>
                <Button colorScheme="" className="bg-blue-700 mt-4">
                  Try for free
                </Button>
              </NavLink>
            )}
            {!isIndexPath && (
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
                  <MenuGroup title="likhitha123@gmail.com">
                    <MenuItem>Profile</MenuItem>
                    <MenuItem>Settings</MenuItem>
                    <MenuItem>Help &amp; feedback</MenuItem>
                  </MenuGroup>
                  <MenuDivider />
                  <MenuItem>Log out</MenuItem>
                </MenuList>
              </Menu>
            )}
          </NavbarContent>
        </div>
      )}
    </Navbar>
  );
};

export default Header;
