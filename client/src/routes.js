import Base from './components/Base.jsx';
import HomePage from './components/HomePage.jsx';
imoprt DashboardPage from './containers/DashboardPage.jsx';
import LoginPage from './containers/LoginPage.jsx';
import SignUpPage from './containers/SignUpPage.jsx';
import Auth from './modules/Auth';

const routes = {
	childRoutes:[
		{
			path:'/',
			getComponent: (location, callback) = > {
				if(Auth.isUserAuthenticated()) {
					callback(null, DashboardPage);
				} else {
					callback(null, HomePage);
				}
			}
			
		},
		{
			path:'/login',
			component:LoginPage
		},
		{
			path:'/signup',
			component:SignUpPage
		},
		{
			path:'/logout',
			onEnter:(nextState, replace) => {
				Auth.deauthenticateUser();

				//change the current url to
				replace('/');
			}
		}
	]
};

export default routes;