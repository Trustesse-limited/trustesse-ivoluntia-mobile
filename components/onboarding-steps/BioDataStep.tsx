import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input } from '@/components/input';
import { Dropdown } from '@/components/dropdown';

interface BioDataStepProps {
  firstName: string;
  setFirstName: (value: string) => void;
  lastName: string;
  setLastName: (value: string) => void;
  gender: string;
  setGender: (value: string) => void;
  dateOfBirth: string;
  setDateOfBirth: (value: string) => void;
  phoneNumber: string;
  setPhoneNumber: (value: string) => void;
}

const genderOptions = ['Male', 'Female', 'Non-binary', 'Prefer not to say'];

export const BioDataStep: React.FC<BioDataStepProps> = ({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  gender,
  setGender,
  dateOfBirth,
  setDateOfBirth,
  phoneNumber,
  setPhoneNumber,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bio Data</Text>
      <Text style={styles.subtitle}>Tell us your details</Text>

      <Input
        label="First Name"
        placeholder="Enter first name"
        value={firstName}
        onChangeText={setFirstName}
      />

      <Input
        label="Last Name"
        placeholder="Enter last name"
        value={lastName}
        onChangeText={setLastName}
      />

      <Dropdown
        label="Gender"
        placeholder="Select gender"
        options={genderOptions}
        value={gender}
        onSelect={setGender}
      />

      <Input
        label="Date of Birth"
        placeholder="DD/MM/YYYY"
        value={dateOfBirth}
        onChangeText={setDateOfBirth}
        keyboardType="numeric"
      />

      <Input
        label="Phone Number"
        placeholder="Enter phone number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#000',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 24,
  },
});
