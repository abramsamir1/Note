import _ from 'lodash';
import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import { notesFetch } from '../actions';
import ListItem from './ListItem';

class List extends Component {
componentWillMount() {
  this.props.notesFetch();
  this.createDataSource(this.props);
}

componentWillReceiveProps(nextProps) {
  this.createDataSource(nextProps);
}

createDataSource({ notes }) {
  const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
  });
  this.dataSource = ds.cloneWithRows(notes);
}

renderRow(note) {
  return <ListItem note={note} />;
}

render() {
  return (
  <ListView
  enableEmptySections
  dataSource={this.dataSource}
  renderRow={this.renderRow}
  />
  );
  }
}

const mapStateToProps = state => {
const notes = _.map(state.notes, (val, uid) => {
return { ...val, uid };
});
return { notes };
};

export default connect(mapStateToProps, { notesFetch })(List);
