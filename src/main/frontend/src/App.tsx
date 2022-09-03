import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Attendance from "./components/Attendance";
import Home from "./components/Home";
import Owners from "./components/Owners";
import Pets from "./components/Pets";
import Layout from "./components/Layout";
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
        </Routes>
    </>
);
