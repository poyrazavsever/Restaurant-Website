import MainPage from './Components/MainPage/MainPage';
import About from './Components/About/About';
import Menu from './Components/Menu/Menu'

export const routes = [
    {
        path:"/",
        name:"Home",
        component:MainPage,
    },

    {
        path:"/about",
        name:"About",
        component:About,
    },

    {
        path:"/menu",
        name:"Menu",
        component:Menu,
    },

    
]