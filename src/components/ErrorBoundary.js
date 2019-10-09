import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import BaseText from './BaseText';

class ErrorBoundary extends React.Component {
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return {hasError: true};
  }

  state = {
    error: null,
    hasError: false,
  };

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
    });
  }

  render() {
    const {children} = this.props;
    const {error, hasError} = this.state;

    return hasError ? (
      <ScrollView style={styles.root}>
        {error && <BaseText>{error.toString()}</BaseText>}
      </ScrollView>
    ) : (
      children
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 8,
  },
});

export default ErrorBoundary;
