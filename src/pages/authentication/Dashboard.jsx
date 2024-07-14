import React from "react";
import { Box, Divider } from "@chakra-ui/react";
import { AppShell } from "@saas-ui/react";
import { Routes, Route } from "react-router-dom";
import Header from "../../components/General/Header";
import DashboardSidebar from "../../components/Dashboard/DashboardSidebar";
import ControlCalendar from "../../components/Dashboard/calender/AdvancedCalendar";
import Subject from "../../components/Dashboard/subjects/Subject";
import Exam from "../../components/Dashboard/exams/Exam";
import Event from "../../components/Dashboard/events/Event";
import MainContent from '../../components/Dashboard/main/MainContent';

export default function Dashboard() {
  return (
    <AppShell
      variant="static"
      minH="100vh"
      navbar={<Header />}
      sidebar={<DashboardSidebar />}
    >
      <Box as="main" flex="1">
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="subjects" element={<Subject />} />
          <Route path="exams" element={<Exam />} />
          <Route path="calendar" element={<ControlCalendar />} />
          <Route path="events" element={<Event />} />
        </Routes>
      </Box>
    </AppShell>
  );
}
