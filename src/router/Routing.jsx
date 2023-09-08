import { lazy } from "react";

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/about/about'));
const Contact = lazy(() => import('../pages/contact/contact'));
const TermAndCondition = lazy(() => import('../pages/termAndCondition/termAndCondition'));



export const Router = [

    {
        id: 1,
        path: '/',
        components: <Home />
    },

    {
        id: 2,
        path: '/about',
        components: <About />
    },

    {
        id: 3,
        path: '/contact',
        components: <Contact />
    },

    {
        id: 4,
        path:'/term-and-condition',
        components:<TermAndCondition/>
    }
]