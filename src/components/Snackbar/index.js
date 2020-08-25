import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Snackbar } from 'react-native-paper';
import { connect } from 'react-redux';
import { handleSnackbarClose } from '../../store/actions/layoutActions';

const CustomSnackbar = ({handleClose,message,open}) => {

  return (
      <Snackbar
        visible={open}
        onDismiss={handleClose}
        action={{
          label: 'Undo',
          onPress: () => {
            // Do something
          },
        }}>
        {message ? message : ''}
      </Snackbar>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

const mapStateToProps = (state) => {
    return{
      open: state.layoutReducer.snackbarState,
      message: state.layoutReducer.snackbarMessage
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return{
      handleClose: () => dispatch(handleSnackbarClose())
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(CustomSnackbar);