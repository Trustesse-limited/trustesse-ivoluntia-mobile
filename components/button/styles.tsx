import { StyleSheet } from 'react-native';


export const buttonStyles = StyleSheet.create({
  container: {
    paddingVertical: 6,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
  
  primary: {
    backgroundColor:  '#3498db',
  },
  primaryText: {
    color: '#FFFFFF',
  },

  outline: {
    backgroundColor: 'transparent',
    borderColor:  '#3498db',
    borderWidth: 1.5,
  },
  outlineText: {
    color:  '#3498db',
  },

  textLink: {
    backgroundColor: 'transparent',
  },
  textLinkText: {
    color:  '#3498db',
    textDecorationLine: 'underline',
  },

  disabled: {
    opacity: 0.5,
  },

  iconLeft: {
    marginRight: 8,
  },
  iconRight: {
    marginLeft: 8,
  },
});
