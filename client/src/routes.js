import Base from './components/Base.jsx';
import HomePage from './components/HomePage.jsx';
import LoginPage from './containers/LoginPage.jsx';
import SignUpPage from './containers/SignUpPage.jsx';

const routes = {
	childRoutes:[
		{
			path:'/',
			component:HomePage
		},
		{
			path:'/login',
			component:LoginPage
		},
		{
			path:'/signup',
			component:SignUpPage
		}
	]
};

export default routes;