import { Colors } from 'react-native/Libraries/NewAppScreen';
import { StyleSheet } from "react-native";
import { Theme } from '@react-navigation/native';

export const styles = (colors: Theme['colors']) => StyleSheet.create({
  button:
  {
    marginVertical: 23,
    backgroundColor: '#FF9A00',
    width: 327,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    marginTop: 10,
    padding: 5,
    fontSize: 12,
    borderRadius: 5,
    color: colors.text,
    backgroundColor: colors.card,
  },
  errorBackgroundColor: { backgroundColor: colors.notification },
  mainPageContainer: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  row: {
    marginBottom: 10,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.border
  },
  flex1: {
    flex: 1,
  },
  rangeErrorContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  rangeErrorText: {
    fontSize: 12,
    marginBottom: 10,
    color: colors.text
  },
  textInput: {
    width: 327,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'left',
    paddingHorizontal: 16,
    fontSize: 12,
    backgroundColor: colors.card,
    color: colors.text,
    borderWidth: 1,
    borderColor: colors.border
  },
  textInputBorderError: {
    borderColor: colors.notification
  },
  rowTitle: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textTransform: 'capitalize',
    color: colors.text,
  },
  rowText: {
    fontSize: 16,
    color: colors.text,
  },
  submitButton: {
    marginVertical: 23,
    backgroundColor: '#FF9A00',
    width: 327,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },

  changeThemeContainer: { alignItems: 'center' },
  changeThemeButton: {
    marginTop: 20,
    width: 30,
    height: 30,
    borderColor: colors.border,
    borderWidth: 7,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  changeThemeImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.border,
  },
  changeThemeText: {
    marginTop: 10,
    color: colors.text,
    fontSize: 12
  }
})