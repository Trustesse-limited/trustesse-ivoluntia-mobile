import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Input } from '@/components/input';
import { Button } from '@/components/button';
import Icon from 'react-native-vector-icons/Ionicons';
import { SafeArea } from '@/components/safe-area';
import { router } from 'expo-router';

export default function Register() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);


  return (
    <SafeArea style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <View style={styles.content}>
          <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>

        <Text style={styles.title}>Create an Account</Text>
        <Text style={styles.subtitle}>Welcome back, enter your details below!</Text>
        
        <Button
          title="Login with Gmail"
          onPress={() => console.log('Gmail login')}
          variant="social"
          icon={<Icon name="logo-google" size={22} color="#DB4437" />}
        />
        <Button
          title="Login with Apple ID"
          onPress={() => console.log('Apple login')}
          variant="social"
          icon={<Icon name="logo-apple" size={24} color="#000" />}
        />
        
        <View style={styles.dividerContainer}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>Or with</Text>
          <View style={styles.dividerLine} />
        </View>

        <Input
          label="Email"
          placeholder="laura@gmail.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <Input
          label="Phone Number"
          placeholder="123456789"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />
        <View>
          <Input
            label="Password"
            placeholder="Minimum of 8 characters"
            value={password}
            variant='password'
            onChangeText={setPassword}
            secureTextEntry={!isPasswordVisible}
          />
        
        </View>
        <View>
          <Input
            label="Confirm Password"
            placeholder="Minimum of 8 characters"
            value={confirmPassword}
             variant='password'
            onChangeText={setConfirmPassword}
            secureTextEntry={!isConfirmPasswordVisible}
          />
           
        </View>

        <TouchableOpacity style={styles.checkboxContainer} onPress={() => setAgreeToTerms(!agreeToTerms)}>
          <Icon name={agreeToTerms ? 'checkbox' : 'square-outline'} size={24} color={agreeToTerms ? '#007AFF' : '#888'} />
          <Text style={styles.checkboxLabel}>Agree to the <Text style={styles.linkText}>Terms and Condition</Text></Text>
        </TouchableOpacity>

        <TouchableOpacity   onPress={() => router.push('/login')} style={styles.switchAuth}>
          <Text style={styles.switchAuthText}>
            Already have an account? <Text style={styles.linkText}>Log in</Text>
          </Text>
        </TouchableOpacity>

      </ScrollView>

      <View style={styles.buttonContainer}>
        <Button title="Create an Account" onPress={() => router.push('/verification')} />
      </View>
    </View>
  </KeyboardAvoidingView>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#FFFFFF' },
  keyboardView: { flex: 1 },
  content: { flex: 1 },
  container: {
    paddingHorizontal: 24,
    paddingVertical: 20,
    paddingBottom: 20,
  },
  buttonContainer: {
    paddingHorizontal: 24,
    paddingBottom: 20,
    backgroundColor: '#FFFFFF',
  },
  backButton: { marginBottom: 24 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 8 },
  subtitle: { fontSize: 14, color: '#666', marginBottom: 24 },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  dividerLine: { flex: 1, height: 1, backgroundColor: '#E0E0E0' },
  dividerText: { marginHorizontal: 12, color: '#888' },

  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  checkboxLabel: {
    marginLeft: 12,
    fontSize: 14,
    color: '#333',
  },
  linkText: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
  switchAuth: { alignItems: 'center', marginTop: 16 },
  switchAuthText: { fontSize: 14, color: '#333' },
});