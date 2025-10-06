import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface MultiSelectProps {
  label?: string;
  options: string[];
  selectedValues: string[];
  onToggle: (value: string) => void;
  maxVisible?: number;
  showAddButton?: boolean;
}

export const MultiSelect: React.FC<MultiSelectProps> = ({
  label,
  options,
  selectedValues,
  onToggle,
  maxVisible = 10,
  showAddButton = false,
}) => {
  const isSelected = (value: string) => selectedValues.includes(value);

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.optionsContainer}
        showsVerticalScrollIndicator={false}
      >
        {options.map((option, index) => {
          const selected = isSelected(option);
          return (
            <TouchableOpacity
              key={`${option}-${index}`}
              style={[styles.chip, selected && styles.chipSelected]}
              onPress={() => onToggle(option)}
            >
              <Text style={[styles.chipText, selected && styles.chipTextSelected]}>
                {option}
              </Text>
              {selected && (
                <Icon name="close" size={16} color="#FFFFFF" style={styles.chipIcon} />
              )}
            </TouchableOpacity>
          );
        })}

        {showAddButton && (
          <TouchableOpacity style={styles.addButton}>
            <Icon name="add" size={16} color="#007AFF" />
          </TouchableOpacity>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    marginBottom: 12,
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
  scrollView: {
    maxHeight: 300,
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#F0F0F0',
    marginRight: 8,
    marginBottom: 8,
  },
  chipSelected: {
    backgroundColor: '#007AFF',
  },
  chipText: {
    fontSize: 14,
    color: '#333',
  },
  chipTextSelected: {
    color: '#FFFFFF',
    fontWeight: '500',
  },
  chipIcon: {
    marginLeft: 6,
  },
  addButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#007AFF',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
});
