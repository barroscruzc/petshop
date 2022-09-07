import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Attendance from "./components/Attendance";
import Home from "./components/Home";
import Owners from "./components/Owners";
import Pets from "./components/Pets";
import Layout from "./components/Layout";
import Reports from "./components/Reports";
export default () => (
    <>
        <Routes>

            <Route path="/" element={
                <Layout>
                    <Home />
                </Layout>
            } />
            <Route path="/pets" element={
                <Layout>
                    <Pets />
                </Layout>
            } />
            <Route path="/owners" element={
                <Layout>
                    <Owners />
                </Layout>
            } />
            <Route path="/attendance" element={
                <Layout>
                    <Attendance />
                </Layout>
            } />
            <Route path="/reports" element={
                <Layout>
                    <Reports />
                </Layout>
            } />
            <Route path="*" element={
                <Layout>
                    <h1
                        style={{
                            textAlign: "center",
                            marginTop: "2rem",
                            color: "black",
                            fontSize: "5rem",
                            fontFamily: "sans-serif",
                            display: "block"
                        }}
                    >404 - Not Found</h1>
                </Layout>
            } />
        </Routes>
    </>
);
