import React from "react";
import { FiHome, FiChevronsLeft, FiChevronsRight } from "react-icons/fi";

import { PiExamLight } from "react-icons/pi";
import { MdOutlineMenuBook } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { MdEventAvailable } from "react-icons/md";

import {
  Sidebar,
  SidebarSection,
  SidebarOverlay,
  NavItem,
  NavGroup,
} from "@saas-ui/react";

import { Spacer, IconButton, useDisclosure } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

function DashboardSidebar() {
  const { isOpen, onToggle } = useDisclosure({
    defaultIsOpen: true,
  });
  return (
    <>
      <Sidebar
      toggleBreakpoint={false}
      variant={isOpen ? 'default' : 'compact'}
      transition="width"
      transitionDuration="normal"
      width={isOpen ? '280px' : '14'}
      minWidth="auto"
    >
      <SidebarSection direction={isOpen ? 'row' : 'column'}>
        <Spacer />
        <IconButton
          onClick={onToggle}
          variant="ghost"
          size="sm"
          icon={isOpen ? <FiChevronsLeft /> : <FiChevronsRight />}
          aria-label="Toggle Sidebar"
        />
      </SidebarSection>

      <SidebarSection flex="1" overflowY="auto" overflowX="hidden">
        <NavGroup>
          <NavLink to="/dashboard" style={{ textDecoration: 'none' }}>
            {({ isActive }) => (
              <NavItem icon={<FiHome />} isActive={isActive}>
                Dashboard
              </NavItem>
            )}
          </NavLink>
          <NavLink to="/dashboard/subjects" style={{ textDecoration: 'none' }}>
            {({ isActive }) => (
              <NavItem icon={<MdOutlineMenuBook />} isActive={isActive}>
                Subjects
              </NavItem>
            )}
          </NavLink>
          <NavLink to="/dashboard/exams" style={{ textDecoration: 'none' }}>
            {({ isActive }) => (
              <NavItem icon={<PiExamLight />} isActive={isActive}>
                Exams
              </NavItem>
            )}
          </NavLink>
          <NavLink to="/dashboard/calendar" style={{ textDecoration: 'none' }}>
            {({ isActive }) => (
              <NavItem icon={<SlCalender />} isActive={isActive}>
                Calendar
              </NavItem>
            )}
          </NavLink>
          <NavLink to="/dashboard/events" style={{ textDecoration: 'none' }}>
            {({ isActive }) => (
              <NavItem icon={<MdEventAvailable />} isActive={isActive}>
                Events
              </NavItem>
            )}
          </NavLink>
        </NavGroup>
      </SidebarSection>
      <SidebarOverlay zIndex="1" />
    </Sidebar>
    </>
  );
}

export default DashboardSidebar;
