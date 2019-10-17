import React from "react";
import { Redirect } from "react-router-dom";
import TabSystem from "../TabSystem";

const SuperVend = () => (<h6>super vend</h6>);
const OutwardVend = () => (<h6> vend outwards </h6>);

const Dashboard = () => (<h6>dashboard home</h6>);
const DashboardTranscations = () => (<h6>dashboard transcation </h6>)


export default [
    {
        iconName: "icon",
        title: "Dashboard",
        path: '/dashboard',
        component: TabSystem,
        routes: [
            {
                path: '/dashboard',
                exact: true,
                component: () => <Redirect replace to="/dashboard/home" />
            },
            {
                path: '/dashboard/home',
                component: Dashboard,
                tab: 'Dashboard'
            },
            {
                path: '/dashboard/transcations',
                component: DashboardTranscations,
                tab: 'Transcations'
            }
        ]
    },
    {
        iconName: "vend",
        title: "Vend",
        path: '/vend',
        component: TabSystem,
        routes: [
            {
                path: '/vend',
                exact: true,
                component: () => <Redirect replace to="/vend/supervend" />
            },
            {
                path: '/vend/supervend',
                component: SuperVend,
                tab: 'Super Vend'
            },
            {
                path: '/vend/outwardvend',
                component: OutwardVend,
                tab: 'Outward Vend'
            }
        ]
    }
];
