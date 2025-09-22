import React from 'react';
import {
  Pressable,
  Text,
  ActivityIndicator,
  View,
  ViewStyle,
  TextStyle,
  StyleProp,
  GestureResponderEvent,
} from 'react-native';
import { buttonStyles } from './styles';
type ButtonVariant = 'primary' | 'outline' | 'textLink';

interface ButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  title: string;
  variant?: ButtonVariant;
  isLoading?: boolean;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export const Button: React.FC<ButtonProps> = ({
  onPress,
  title,
  variant = 'primary',
  isLoading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  style,
  textStyle,
}) => {
  const isButtonDisabled = disabled || isLoading;

  const getVariantStyles = (variant: ButtonVariant) => {
    switch (variant) {
      case 'primary':
        return {
          container: buttonStyles.primary,
          text: buttonStyles.primaryText,
        };
      case 'outline':
        return {
          container: buttonStyles.outline,
          text: buttonStyles.outlineText,
        };
      case 'textLink':
        return {
          container: buttonStyles.textLink,
          text: buttonStyles.textLinkText,
        };
      default:
        return {
          container: buttonStyles.primary,
          text: buttonStyles.primaryText,
        };
    }
  };

  const variantStyles = getVariantStyles(variant);
  
  const finalContainerStyles = [
    buttonStyles.container,
    variantStyles.container,
    style,
    isButtonDisabled && buttonStyles.disabled,
  ];

  const finalTextStyles = [
    buttonStyles.text,
    variantStyles.text,
    textStyle,
  ];

  return (
    <Pressable onPress={onPress} disabled={isButtonDisabled} style={finalContainerStyles}>
      {isLoading ? (
        <ActivityIndicator color={variantStyles.text.color} />
      ) : (
        <>
          {leftIcon && <View style={buttonStyles.iconLeft}>{leftIcon}</View>}
          <Text style={finalTextStyles}>{title}</Text>
          {rightIcon && <View style={buttonStyles.iconRight}>{rightIcon}</View>}
        </>
      )}
    </Pressable>
  );
};
