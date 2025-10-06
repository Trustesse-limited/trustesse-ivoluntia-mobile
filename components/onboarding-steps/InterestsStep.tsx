import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, FlatList, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface InterestsStepProps {
  selectedInterests: string[];
  onToggleInterest: (interest: string) => void;
}

const mainInterestOptions = [
  'Community Development',
  'Mentoring',
  'Human Right',
  'Drug Abuse',
  'Education',
  'Boy Child',
  'Child Health',
  'Climate Change',
  'Youth Empowerment',
  'Abuse Victims',
  'Food',
];

const allInterestOptions = [
  'Education',
  'Health & Wellness',
  'Environment',
  'Boy Child',
  'Community Development',
  'Gender Equality',
  'Women & Girls',
  'Arts & Culture',
  'Elderly Care',
  'Animal Rescue',
  'Food',
  'Climate Change',
  'Human Right',
  'Women in Business',
  'Digital Skills',
  'Language Interpretation',
  'Medical Aid',
  'Cultural Heritage',
  'Creative Art',
  'Pet Adoption',
  'Blood Donation',
  'Nutrition and Fitness',
  'Legal Aid',
  'Youth Empowerment',
  'Mentoring',
  'Child Health',
  'Drug Abuse',
  'Abuse Victims',
];

export const InterestsStep: React.FC<InterestsStepProps> = ({
  selectedInterests,
  onToggleInterest,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const isSelected = (interest: string) => selectedInterests.includes(interest);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Interests</Text>
      <Text style={styles.subtitle}>
        Choose opportunities that align with your passions and value
      </Text>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Interest</Text>
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Legal Aid +</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Creative Art +</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        style={styles.interestsScrollView}
        contentContainerStyle={styles.interestsContainer}
        showsVerticalScrollIndicator={false}
      >
        {mainInterestOptions.map((interest, index) => {
          const selected = isSelected(interest);
          return (
            <TouchableOpacity
              key={`${interest}-${index}`}
              style={[styles.interestChip, selected && styles.interestChipSelected]}
              onPress={() => onToggleInterest(interest)}
            >
              {selected && (
                <Icon name="checkmark" size={14} color="#FFFFFF" style={styles.checkIcon} />
              )}
              <Text style={[styles.interestText, selected && styles.interestTextSelected]}>
                {interest}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      <TouchableOpacity
        style={styles.seeMoreButton}
        onPress={() => setIsModalVisible(true)}
      >
        <Text style={styles.seeMoreText}>See More</Text>
        <Icon name="arrow-forward" size={16} color="#007AFF" />
      </TouchableOpacity>

      <Modal
        visible={isModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setIsModalVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setIsModalVisible(false)}
        >
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Interests - Dropdown</Text>
              <TouchableOpacity onPress={() => setIsModalVisible(false)}>
                <Icon name="close" size={24} color="#000" />
              </TouchableOpacity>
            </View>

            <FlatList
              data={allInterestOptions}
              keyExtractor={(item, index) => `${item}-${index}`}
              renderItem={({ item }) => {
                const selected = isSelected(item);
                return (
                  <TouchableOpacity
                    style={styles.modalOption}
                    onPress={() => onToggleInterest(item)}
                  >
                    <Text style={styles.modalOptionText}>{item}</Text>
                    {selected && (
                      <Icon name="checkmark" size={20} color="#007AFF" />
                    )}
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </TouchableOpacity>
      </Modal>
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
    lineHeight: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  actionButton: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: '#F0F0F0',
    borderRadius: 12,
  },
  actionButtonText: {
    fontSize: 10,
    color: '#333',
  },
  interestsScrollView: {
    flex: 1,
  },
  interestsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    paddingBottom: 8,
  },
  interestChip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#F0F0F0',
    marginRight: 8,
    marginBottom: 8,
  },
  interestChipSelected: {
    backgroundColor: '#007AFF',
  },
  checkIcon: {
    marginRight: 6,
  },
  interestText: {
    fontSize: 14,
    color: '#333',
  },
  interestTextSelected: {
    color: '#FFFFFF',
    fontWeight: '500',
  },
  seeMoreButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginTop: 12,
    marginBottom: 8,
  },
  seeMoreText: {
    fontSize: 14,
    color: '#007AFF',
    fontWeight: '500',
    marginRight: 4,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    maxHeight: '70%',
    paddingBottom: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  modalOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  modalOptionText: {
    fontSize: 16,
    color: '#333',
  },
});
