import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Input } from "@/components/input"; 
import { Button } from "@/components/button";
import Icon from "react-native-vector-icons/Ionicons";
import { SafeArea }  from "@/components/safe-area"
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const resetOnboarding = async () => {
    try {
      await AsyncStorage.removeItem("@onboarding_complete");
      alert("Onboarding reset! Restart the app to see onboarding screen.");
    } catch (error) {
      console.error("Failed to reset onboarding:", error);
    }
  };

  return (
    <SafeArea >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <View style={styles.content}>
          <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.headerRow}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Icon name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.resetButton}
            onPress={resetOnboarding}
          >
            <Text style={styles.resetButtonText}>Reset</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>You're welcome, enter your details below!</Text>

        <Input
          label="Email"
          placeholder="laura@gmail.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <View>
          <Input
            label="Password"
            placeholder="Minimum of 8 characters"
            value={password}
            onChangeText={setPassword}
            variant="password"
          />
        </View>

        <TouchableOpacity onPress={() => router.push('/change-password')}>
          <Text style={styles.forgotPassword}>Forgot password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.switchAuth}
          onPress={() => router.push('/register')}
        >
          <Text style={styles.switchAuthText}>
            Don't have an account?{" "}
            <Text style={styles.switchAuthLink}>Create an Account</Text>
          </Text>
        </TouchableOpacity>

        <View style={styles.dividerContainer}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>Or with</Text>
          <View style={styles.dividerLine} />
        </View>

        <Button
          title="Login with Gmail"
          onPress={() => console.log("Gmail login")}
          variant="social"
          icon={<Icon name="logo-google" size={22} color="#DB4437" />}
        />
        <Button
          title="Login with Apple ID"
          onPress={() => console.log("Apple login")}
          variant="social"
          icon={<Icon name="logo-apple" size={24} color="#4D4D4D" />}
        />
      </ScrollView>

      <View style={styles.buttonContainer}>
        <Button title="Log in" onPress={() => console.log("Login pressed")} />
      </View>
    </View>
  </KeyboardAvoidingView>
    </SafeArea>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#FFFFFF", marginTop:40 },
  keyboardView: { flex: 1 },
  content: { flex: 1 },
  container: {
    paddingHorizontal: 24,
    paddingVertical: 20,
    paddingBottom: 20,
    backgroundColor: "#FFFFFF",
  },
  buttonContainer: {
    paddingHorizontal: 24,
    paddingBottom: 20,
    backgroundColor: "#FFFFFF",
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  backButton: {},
  resetButton: {
    backgroundColor: '#FF3B30',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  resetButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#303030",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 32,
  },
  forgotPassword: {
    textAlign: "right",
    color: "#007AFF",
    fontWeight: "500",
    marginBottom: 24,
  },
  switchAuth: {
    alignItems: "center",
    marginTop: 16,
  },
  switchAuthText: {
    fontSize: 14,
    color: "#333",
  },
  switchAuthLink: {
    color: "#007AFF",
    fontWeight: "bold",
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 32,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#E0E0E0",
  },
  dividerText: {
    marginHorizontal: 12,
    color: "#888",
    fontSize: 14,
  },
});
