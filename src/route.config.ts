import Home from './components/Home/Home'
import Shop from './components/Shop/Shop'
import Categories from './components/Categories/Categories'

interface route {
    name: string,
    path: string,
    main?: any,
    sidebar?: any
}

const routes: route[]  = [
    {
        name: "Home",
        path: '/',
        main: Home
    },
    {
        name: "Shop",
        path: 'shop',
        main: Shop,
        sidebar: Categories
    }
]

export default routes;