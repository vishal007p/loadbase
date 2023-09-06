import Home from "../pages/Home";
import About from "../pages/about/about";
import Contact from "../pages/contact/contact";
import TermAndCondition from "../pages/termAndCondition/termAndCondition";

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