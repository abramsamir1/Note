import React, { Component } from 'react';
import { connect } from 'react-redux';
import { noteCreate, addPressed } from '../actions';
import { Card, CardSection, Button } from './common';
import NoteForm from './NoteForm';


class CreateNote extends Component {
componentWillMount() {
  this.props.addPressed();
}

  onButtonPress() {
    const { header, note } = this.props;
    this.props.noteCreate({ header, note });
  }

render() {
  return (
    <Card>
      <NoteForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
    </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { header, note } = state.noteForm;
  return { header, note };
};

export default connect(mapStateToProps, { noteCreate, addPressed })(CreateNote);
