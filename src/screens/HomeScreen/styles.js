import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#9c9b98',
  },
  innerBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 15,
  },
  innerBox1: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingRight: 10,
  },
  h1: {
    fontSize: 26,
    fontFamily: 'Roboto-Medium',
    fontWeight: '200',
    color: 'black',
  },
  h2: {
    fontSize: 20,
    fontFamily: 'Roboto-Medium',
    fontWeight: '200',
    color: '#424240',
    paddingBottom: 8,
  },
  h3: {
    fontSize: 18,
    fontFamily: 'Roboto-Medium',
    fontWeight: '200',
    color: '#424240',
  },
});
