import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { observer } from 'mobx-react';
import { RootStoreContext } from './index';
import Landing from './components/features/Layout/Landing';
import './styles/App.css';

const App = () => {
	const RootStore = useContext(RootStoreContext);
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Landing} />
			</Switch>
		</Router>
	);
};

export default observer(App);
