import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Form from './components/Form';
import List from './components/List';
import CreateNote from './components/CreateNote';
import EditNote from './components/EditNote';


const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 55 }}>
    <Scene key="auth">
      <Scene key="form" component={Form} title="Sign Form" initial />
    </Scene>

    <Scene key="main">
    <Scene
    key="list"
    component={List}
    title="Notes"
    rightTitle="Add"
    onRight={() => Actions.createNote()}
    initial
    />
    <Scene key="createNote" component={CreateNote} title=" Create Note" />
    <Scene key="editNote" component={EditNote} title="Edit your Note" />
    </Scene>

    </Router>
  );
};

export default RouterComponent;
