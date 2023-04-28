
import Home from '../pages/index'
import Details from '../pages/details/index'
import Cart from '../pages/cart/index'
import Forms from '../components/Forms/Step1/index'
import Login from '../components/Forms/Step2/index'
import Address from '../components/Forms/Step3/index'
import Paymentmethod from '../components/Forms/step4/index'
import Completepayment from '../components/Forms/step5/index'
import Main1 from '../components/Forms/index'
import { OFFERS } from '../utils'
import offers from '../components/offers/index'
import Footercontent from '../components/footercontent/index'


const ROUTER = [
    {
        url:'/',
        component: Home,
    },
    {
        url:'/detail',
        component: Details,
    },
    {
        url:'/cart',
        component: Cart,
    },
    {
        url: '/signup',
        component:Forms,
    },
    {
        url: '/login',
        component:Login,
    },
    {
        url: '/address',
        component:Address,
    },
    {
        url: '/paymentmethod',
        component:Paymentmethod,
    },
    {
        url: '/completepayment',
        component:Completepayment,
    },

    {
        url: '/Main1',
        component:Main1,
    },
    {
        url:'/offers',
        component:offers,
    },
    {
        url:'/footercontent',
        component:Footercontent,
    }
  
];



export {ROUTER};