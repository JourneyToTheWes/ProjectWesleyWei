import React, { useContext } from 'react';
import { observer } from 'mobx-react';
import { RootStoreContext } from './index';

const App = () => {
  const RootStore = useContext(RootStoreContext);
  const { school } = RootStore.ResumeStore;
  return (
    <div className="App">
      <h1>{`My school: ${school}`}</h1>
    </div>
  );
}

export default observer(App);
