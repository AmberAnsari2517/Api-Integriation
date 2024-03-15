import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./layouts/dashboard";
import LogoOnlyLayout from "./layouts/LogoOnlyLayout";


// ----------------------------------------------------------------------
const Authentication = () => {
  if (localStorage.getItem("token")) {
    return <Navigate to="/dashboard"> </Navigate>;
  }
  if (!localStorage.getItem("token")) {
    return <Navigate to="/login"> </Navigate>;
  }
};

export default function Router() {
  return (
    <Routes>      
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<Authentication />} />
        <Route
          path="/dashboard"
          element={<DashboardApp feeds_type="general" />}
        />
      </Route>
      
      <Route element={<LogoOnlyLayout />}>
        <Route path="/" element={<Authentication />} />
        <Route path="404" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login-as-customer" element={<LoginAsCustomer />} />
        <Route path="/forget_password" element={<ForgetPassword />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
