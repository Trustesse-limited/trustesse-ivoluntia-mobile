import React from 'react';
import { StyleSheet } from 'react-native';
import {
  SafeAreaView,
  SafeAreaViewProps,
} from 'react-native-safe-area-context';

interface CustomSafeAreaProps extends SafeAreaViewProps {
  /**
   * If true, the content will be centered vertically and horizontally.
   */
  centered?: boolean;
}

export const SafeArea: React.FC<CustomSafeAreaProps> = ({
  children,
  style,
  centered,
  ...props
}) => {
  return (
    <SafeAreaView
      style={[
        styles.safeArea,
        centered && styles.centeredContent, // Conditionally apply the centered style
        style, // Your custom styles will override the defaults
      ]}
      {...props}
    >
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  // New style for centering content
  centeredContent: {
    justifyContent: 'center', // Centers vertically
    alignItems: 'center',     // Centers horizontally
    paddingHorizontal: 24,     // Adds space on the left and right
  },
});