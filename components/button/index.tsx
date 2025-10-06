// components/Button.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, StyleProp, ViewStyle, TextStyle } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'social';
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ title, onPress, variant = 'primary', style, textStyle, icon }) => {
  const containerStyle = [
    styles.container,
    variant === 'primary' ? styles.primaryContainer : styles.socialContainer,
    style,
  ];

  const textStyleInternal = [
    styles.text,
    variant === 'primary' ? styles.primaryText : styles.socialText,
    textStyle,
  ];

  return (
    <TouchableOpacity style={containerStyle} onPress={onPress}>
      {icon && <View style={styles.iconWrapper}>{icon}</View>}
      <Text style={textStyleInternal}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderRadius: 8,
    width: '100%',
    marginVertical: 8,
  },
  primaryContainer: {
    backgroundColor: '#007AFF', 
  },
  socialContainer: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
  },
  primaryText: {
    color: '#FFFFFF',
  },
  socialText: {
    color: '#333333',
  },
  iconWrapper: {
    marginRight: 12,
  },
});