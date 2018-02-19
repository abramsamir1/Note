import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import NoteForm from './NoteForm';
import { noteUpdate, noteDelete, noteSave } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';

class EditNote extends Component {
state = { showModal: false };
componentWillMount() {
  _.each(this.props.yourNote, (value, prop) => {
    this.props.noteUpdate({ prop, value });
  });
}

onButtonPress() {
  const { header, note } = this.props;
  this.props.noteSave({ header, note, uid: this.props.yourNote.uid });
}

onAccept() {
      const { uid } = this.props.yourNote;
      this.props.noteDelete({ uid });
    }

onDecline() {
        this.setState({ showModal: false });
      }


render() {
  return (
    <Card>
      <NoteForm />
      <CardSection>
        <Button onPress={this.onButtonPress.bind(this)}>
          Save
        </Button>
      </CardSection>
      <CardSection>
        <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
          Delete
        </Button>
      </CardSection>
      <Confirm
      visible={this.state.showModal}
      onAccept={this.onAccept.bind(this)}
      onDecline={this.onDecline.bind(this)}
      >
      Are you sure you want to delete the note?
      </Confirm>
    </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { header, note } = state.noteForm;
  return { header, note };
};

export default connect(mapStateToProps, {
  noteUpdate,
  noteSave,
  noteDelete
})(EditNote);
