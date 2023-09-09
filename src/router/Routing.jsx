import { Suspense, lazy } from "react";
import Loading from "../Components/Loading/Loading";

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/about/about'));
const Contact = lazy(() => import('../pages/contact/contact'));
const TermAndCondition = lazy(() => import('../pages/termAndCondition/termAndCondition'));



export const Router = [

    {
        id: 1,
        path: '/',
        components:<Suspense  fallback={<Loading />}><Home /></Suspense>  
    },

    {
        id: 2,
        path: '/about',
        components: <Suspense  fallback={<Loading />}><About /></Suspense>
    },

    {
        id: 3,
        path: '/contact',
        components:  <Suspense  fallback={<Loading />}><Contact /></Suspense>
    },

    {
        id: 4,
        path:'/term-and-condition',
        components:<Suspense  fallback={<Loading />}><TermAndCondition/></Suspense>
    }
]