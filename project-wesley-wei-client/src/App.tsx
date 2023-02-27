import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { observer } from 'mobx-react';
import { RootStoreContext } from './index';
import Landing from './components/features/Layout/Landing';
import Projects from './components/features/Layout/Projects';
import './styles/App.css';

const App = () => {
	const RootStore = useContext(RootStoreContext);
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/projects" element={<Projects store={RootStore} />} />
			</Routes>
		</Router>
	);
};

export default observer(App);
