import { useState } from "react";

import { Route, Routes, Navigate } from "react-router-dom";

import "./App.css";
import Signup from "./pages/Signup";
import useAuthUser from "./hooks/useAuthUser";
import Onboard from "./pages/Onboard";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import OnBoardLayout from "./components/OnBoardLayout";
import A from "./pages/A";
import B from "./pages/B";
import C from "./pages/C";
import D from "./pages/D";
import Module from "./pages/Module";

function App() {
  const { isLoading, authUser } = useAuthUser();
  const isAuthenticated = Boolean(authUser);
  const isOnboarded = authUser?.isOnboarded;
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated && isOnboarded ? (
              <Layout showSidebar={true}>
                <Home />
              </Layout>
            ) : (
              <Navigate to={!isAuthenticated ? "/login" : "/onboard"} />
            )
          }
        />
        <Route
          path="/signup"
          element={
            !isAuthenticated ? (
              <Signup />
            ) : (
              <Navigate to="/module" />
            )
          }
        />
        <Route
          path="/login"
          element={
            !isAuthenticated ? (
              <Login />
            ) : (
              <Navigate to="/module" />
            )
          }
        />
        <Route
          path="/module"
          element={isAuthenticated ? <Module /> : <Navigate to="/login" />}
        />
        <Route path="/a" element={<A />} />
        <Route path="/b" element={<B />} />
        <Route path="/c" element={<C />} />
        <Route path="/d" element={<D />} />
        <Route
          path="/onboard"
          element={
            isAuthenticated ? (
              !isOnboarded ? (
                <OnBoardLayout showSidebar={true}>
                  <Onboard />
                </OnBoardLayout>
              ) : (
                <Navigate to="/" />
              )
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </>
  );
}

export default App;
