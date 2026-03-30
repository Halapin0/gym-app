import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function IndexScreen(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Build your gym plan</Text>
      <Text style={styles.subtitle}>
        Get a structured workout plan based on your goal, schedule, and equipment.
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => router.push('/goal')}>
        <Text style={styles.buttonText}>Get started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#101418', padding: 24, justifyContent: 'center' },
  title: { color: '#FFFFFF', fontSize: 28, fontWeight: '700', marginBottom: 8 },
  subtitle: { color: '#9CA3AF', fontSize: 16, marginBottom: 32 },
  option: { backgroundColor: '#1E2530', borderRadius: 12, padding: 16, marginBottom: 12 },
  optionText: { color: '#FFFFFF', fontSize: 16 },
  button: { backgroundColor: '#4F8EF7', borderRadius: 12, padding: 16, alignItems: 'center', marginTop: 24 },
  buttonText: { color: '#FFFFFF', fontSize: 16, fontWeight: '600' },
});
