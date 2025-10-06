import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, FlatList, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface SkillsStepProps {
  selectedSkills: string[];
  onToggleSkill: (skill: string) => void;
}

const mainSkillOptions = [
  'Data Entry',
  'Mobile',
  'Football',
  'Teaching',
  'Public Speaking',
  'Swimming',
  'Acting',
  'Project Management',
  'Blogging',
  'Campaign Support',
  'First Aid',
  'Active Listening',
  'Comedy',
];

const allSkillOptions = [
  'Public Speaking',
  'Teaching',
  'Mentoring',
  'Time Management',
  'Program Management',
  'Gender Equality',
  'Active Listening',
  'Fundraising',
  'Photography',
  'Graphics Design',
  'Social Media Management',
  'Conflict Resolution',
  'Content Writing',
  'Blogging',
  'Digital Marketing',
  'Event Planning',
  'Acting',
  'Project Management',
  'Web Development',
  'Mobile',
  'App Testing',
  'Data Entry',
  'First Aid',
  'Football',
  'Swimming',
  'Campaign Support',
  'Comedy',
  'Cooking',
  'Planning',
  'Carpentry',
  'Sports',
];

export const SkillsStep: React.FC<SkillsStepProps> = ({
  selectedSkills,
  onToggleSkill,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const isSelected = (skill: string) => selectedSkills.includes(skill);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Skills and Strength</Text>
      <Text style={styles.subtitle}>
        We will help you find the right place to use it for good.
      </Text>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Area of Skill(s)</Text>
        <Text style={styles.sectionTitle}>Skills</Text>
      </View>

      <ScrollView
        style={styles.skillsScrollView}
        contentContainerStyle={styles.skillsContainer}
        showsVerticalScrollIndicator={false}
      >
        {mainSkillOptions.map((skill, index) => {
          const selected = isSelected(skill);
          return (
            <TouchableOpacity
              key={`${skill}-${index}`}
              style={[styles.skillChip, selected && styles.skillChipSelected]}
              onPress={() => onToggleSkill(skill)}
            >
              {selected && (
                <Icon name="checkmark" size={14} color="#FFFFFF" style={styles.checkIcon} />
              )}
              <Text style={[styles.skillText, selected && styles.skillTextSelected]}>
                {skill}
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
              <Text style={styles.modalTitle}>Skills and Strength - Dropdown</Text>
              <TouchableOpacity onPress={() => setIsModalVisible(false)}>
                <Icon name="close" size={24} color="#000" />
              </TouchableOpacity>
            </View>

            <FlatList
              data={allSkillOptions}
              keyExtractor={(item, index) => `${item}-${index}`}
              renderItem={({ item }) => {
                const selected = isSelected(item);
                return (
                  <TouchableOpacity
                    style={styles.modalOption}
                    onPress={() => onToggleSkill(item)}
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
  skillsScrollView: {
    flex: 1,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    paddingBottom: 8,
  },
  skillChip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#F0F0F0',
    marginRight: 8,
    marginBottom: 8,
  },
  skillChipSelected: {
    backgroundColor: '#007AFF',
  },
  checkIcon: {
    marginRight: 6,
  },
  skillText: {
    fontSize: 14,
    color: '#333',
  },
  skillTextSelected: {
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
