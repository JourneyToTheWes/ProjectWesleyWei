import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { observer } from 'mobx-react';
import { RootStoreContext } from './index';
import Landing from 'components/pages/landing/Landing';
import Projects from 'components/pages/project/Projects';
import Project from 'components/pages/project/Project';
import Resume from 'components/pages/resume/Resume';
import Videos from 'components/pages/videos/Videos';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './styles/App.css';

const helmetContext = {};

const App = () => {
	const RootStore = useContext(RootStoreContext);
	return (
		<HelmetProvider context={helmetContext}>
			<Router>
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="/projects" element={<Projects store={RootStore} />} />
					<Route path="/projects/:id" element={<Project />} />
					<Route path="/resume" element={<Resume store={RootStore} />} />
					<Route path="/videos" element={<Videos store={RootStore} />} />
				</Routes>
			</Router>
		</HelmetProvider>
	);
};

export default observer(App);
