import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input } from '@/components/input';
import { Dropdown } from '@/components/dropdown';

interface LocationStepProps {
  country: string;
  setCountry: (value: string) => void;
  state: string;
  setState: (value: string) => void;
  city: string;
  setCity: (value: string) => void;
  zipCode: string;
  setZipCode: (value: string) => void;
  address: string;
  setAddress: (value: string) => void;
}

const countryOptions = [
  'United States',
  'United Kingdom',
  'Canada',
  'Australia',
  'Germany',
  'France',
  'Nigeria',
  'Ghana',
  'South Africa',
  'Kenya',
];

export const LocationStep: React.FC<LocationStepProps> = ({
  country,
  setCountry,
  state,
  setState,
  city,
  setCity,
  zipCode,
  setZipCode,
  address,
  setAddress,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Location</Text>
      <Text style={styles.subtitle}>Where are you details</Text>

      <Dropdown
        label="Country"
        placeholder="Select country"
        options={countryOptions}
        value={country}
        onSelect={setCountry}
      />

      <Input
        label="State"
        placeholder="Enter state"
        value={state}
        onChangeText={setState}
      />

      <Input
        label="City"
        placeholder="Enter city"
        value={city}
        onChangeText={setCity}
      />

      <Input
        label="Zip Code"
        placeholder="Enter zip code"
        value={zipCode}
        onChangeText={setZipCode}
        keyboardType="numeric"
      />

      <Input
        label="Address (Optional)"
        placeholder="Enter address"
        value={address}
        onChangeText={setAddress}
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
