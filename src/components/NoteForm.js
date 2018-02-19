import React, { Component } from 'react';
import { TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import { noteUpdate } from '../actions';
import { CardSection } from './common';


class NoteForm extends Component {
render() {
  const { containerStyle, headerStyle, noteContainer } = styles;

    return (
      <View syle={containerStyle}>

      <CardSection>

      <TextInput
      style={headerStyle}
      placeholder='Header'
      value={this.props.header}
      onChangeText={
          headerEntered => this.props.noteUpdate({ prop: 'header', value: headerEntered })
      }
      />

      </CardSection>

      <CardSection>
      <TextInput
        style={noteContainer}
        multiline={true}
        placeholder='Write your note here ... '
        value={this.props.note}
       onChangeText={
            noteEntered => this.props.noteUpdate({ prop: 'note', value: noteEntered })
        }

      />


      </CardSection>
      </View>
    );
  }
}

const styles = {
  headerStyle: {
    fontSize: 25,
    padding: 10,
    margin: 5,
    flex: 1
  },
  noteContainer: {
    flex: 3,
    height: 300,
    textAlignVertical: 'top',
    margin: 5,
    padding: 10,
    fontSize: 18
    },
  containerStyle: {
    flex: 1,
    flexDirection: 'column',
    borderWidth: 1
  }
};

const mapStateToProps = (state) => {
  const { header, note } = state.noteForm;
  return { header, note };
};

export default connect(mapStateToProps, { noteUpdate })(NoteForm);
