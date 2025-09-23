import { View, Text, StyleSheet, SafeAreaView, Button, Alert } from 'react-native';
import { Link } from 'expo-router';
// Import AsyncStorage and the DevSettings module
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DevSettings } from 'react-native';

export default function HomeScreen() {
  const handleResetOnboarding = async () => {
    try {
      // 1. Remove the key from storage
      await AsyncStorage.removeItem('@onboarding_complete');
      Alert.alert("Success", "Onboarding state has been reset.");

      // 2. Reload the application
      DevSettings.reload();
    } catch (error) {
      console.error("Failed to reset onboarding state.", error);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* ... your existing home screen content ... */}

        {/* --- DEVELOPMENT ONLY BUTTON --- */}
        <View style={styles.devButtonContainer}>
          <Button
            title="Reset Onboarding & Reload"
            onPress={handleResetOnboarding}
            color="#841584"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // ... your other styles
  devButtonContainer: {
    marginTop: 40,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    padding: 24,
  },
});