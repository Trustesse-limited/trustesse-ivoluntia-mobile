import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Button } from "@/components/button";
import Icon from "react-native-vector-icons/Ionicons";
import { SafeArea } from "@/components/safe-area";
import { router } from "expo-router";

const OTP_LENGTH = 4;

export default function Verification() {
  const [otp, setOtp] = useState("");
  const inputRef = useRef<TextInput>(null);

  const handleChange = (text: string) => {
    const cleaned = text.replace(/[^0-9]/g, "").slice(0, OTP_LENGTH);
    setOtp(cleaned);
  };

  const renderOtpBoxes = () => {
    const boxes = [];
    for (let i = 0; i < OTP_LENGTH; i++) {
      const digit = otp[i] || "";
      const isFocused = i === otp.length;
      boxes.push(
        <View
          key={i}
          style={[styles.otpBox, isFocused && styles.otpBoxFocused]}
        >
          <Text style={styles.otpText}>{digit}</Text>
        </View>
      );
    }
    return boxes;
  };

  return (
    <SafeArea style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <View style={styles.container}>
        <View style={styles.headerRow}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Icon name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.phoneButton}>
            <Text style={styles.phoneButtonText}>Use phone number</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.textcontainer}>
          <Text style={styles.title}>Verification Email</Text>
          <Text style={styles.subtitle}>
            Please enter the code we just sent to email{" "}
            <Text style={styles.email}>jhon***@gmail.com</Text>
          </Text>
        </View>

        <TextInput
          ref={inputRef}
          style={styles.hiddenInput}
          value={otp}
          onChangeText={handleChange}
          keyboardType="number-pad"
          maxLength={OTP_LENGTH}
          autoFocus
        />
        <TouchableOpacity
          style={styles.otpContainer}
          activeOpacity={1}
          onPress={() => inputRef.current?.focus()}
        >
          {renderOtpBoxes()}
        </TouchableOpacity>

        <TouchableOpacity style={styles.resendContainer}>
          <Text style={styles.resendText}>
            Didn't receive a code? <Text style={styles.resendLink}>Resend</Text>
          </Text>
        </TouchableOpacity>

        <View style={styles.buttonContainer}>
          <Button
            title="Submit"
            onPress={() => router.push("/new-password")}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
    </SafeArea>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#FFFFFF" },
  keyboardView: { flex: 1 },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
  },
  buttonContainer: {
    paddingHorizontal: 24,
    paddingBottom: 20,
    backgroundColor: "#FFFFFF",
    marginTop: "auto",
  },
  backButton: { marginBottom: 24 },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 8 },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 40,
    lineHeight: 24,
    textAlign: "center",
  },
  email: { fontWeight: "bold", color: "#0E68DC" },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 32,
  },
  otpBox: {
    width: 80,
    height: 60,
    backgroundColor: "#F8F8F8",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  otpBoxFocused: {
    borderColor: "#007AFF",
  },
  otpText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  hiddenInput: {
    position: "absolute",
    opacity: 0,
  },
  resendContainer: {
    alignItems: "center",
    marginBottom: 32,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24,
  },

  phoneButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#0E68DC33"
  },
  phoneButtonText: {
    color: "#000000ff",
    fontSize: 10,
    fontWeight: "600",
  },

  textcontainer: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginBottom: 24,
  },

  resendText: {
    fontSize: 14,
    color: "#333",
  },
  resendLink: {
    color: "#007AFF",
    fontWeight: "bold",
  },
});
