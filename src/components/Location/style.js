import { Dimensions, StyleSheet } from 'react-native';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'grey',
    height: height
  },
  redbox: {
    width: 400,
    height: 600,
    backgroundColor: 'red',
    zIndex: 2
  },
  headerStyle: {
    fontSize: 36,
    textAlign: 'center',
    fontWeight: '100',
    marginBottom: 24
  },
  elementsContainer: {
    alignSelf: 'stretch',
    backgroundColor: '#ecf5fd'
  },
  submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40
  },
  submitButtonText: {
    color: 'white',
    textAlign: 'center'
  },
});
export default styles;
