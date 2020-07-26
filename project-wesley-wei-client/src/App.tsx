import React, { useContext } from 'react';
import { observer } from 'mobx-react';
import { RootStoreContext } from './index';
import Compass from './components/features/Compass/Compass';

const App = () => {
	const RootStore = useContext(RootStoreContext);
	return (
		<div className="App">
			<Compass size="large" />
		</div>
	);
};

export default observer(App);
