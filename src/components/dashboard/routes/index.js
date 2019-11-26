import React from "react";
import { Redirect } from "react-router-dom";
import TabSystem from "../TabSystem";
import DashboardHome from "../DashboardHome";
import DashboardTranscations from "../DashboardTranscations";

const SuperVend = () => (<h6>super vend</h6>);
const OutwardVend = () => (<h6> vend outwards </h6>);
const VendWallet = () => (<div className="text-center">Vend wallet system</div>)
const Settings = () => (<div className="text-center">Settings</div>)

export default [
    {
        iconName: "block",
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
                component: DashboardHome,
                tab: 'Dashboard',
                tabIcon: 'block'
            },
            {
                path: '/dashboard/transcations',
                component: DashboardTranscations,
                tab: 'Transcations',
                tabIcon: 'card'
            }
        ]
    },
    {
        iconName: "lend",
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
    },
    {
        iconName: "wallet",
        title: "Vend",
        path: '/wallet',  
        component: TabSystem,
        routes: [
            {
                path: '/wallet',
                component: VendWallet,
                tab: 'My Wallet'
            },
            {
                path: '/wallet/stolen',
                component: VendWallet,
                tab: 'Stolen Wallet'
            }
        ]
    },
    {
        iconName: "bolt",
        title: "Settings",
        path: '/settings',  
        component: TabSystem,
        routes: [
            {
                path: '/settings',
                exact: true,
                component: () => <Redirect replace to="/settings/personal" />
            },
            {
                path: '/settings/personal',
                component: Settings,
                tab: 'personal information'
            },
            {
                path: '/settings/password',
                component: Settings,
                tab: 'password'
            }
        ]
    }

];
