import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { TextInput, Button, Title, Surface, HelperText } from 'react-native-paper';

const BookingScreen = ({ route, navigation }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    // TODO: Implement booking submission
    alert('Réservation enregistrée !');
    navigation.navigate('Home');
  };

  return (
    <ScrollView style={styles.container}>
      <Surface style={styles.surface}>
        <Title style={styles.title}>Réserver un service</Title>
        
        <TextInput
          label="Date"
          value={date}
          onChangeText={setDate}
          mode="outlined"
          style={styles.input}
        />

        <TextInput
          label="Heure"
          value={time}
          onChangeText={setTime}
          mode="outlined"
          style={styles.input}
        />

        <TextInput
          label="Adresse"
          value={address}
          onChangeText={setAddress}
          mode="outlined"
          style={styles.input}
          multiline
        />

        <TextInput
          label="Description du besoin"
          value={description}
          onChangeText={setDescription}
          mode="outlined"
          style={styles.input}
          multiline
          numberOfLines={4}
        />

        <Button 
          mode="contained" 
          onPress={handleSubmit}
          style={styles.button}
        >
          Confirmer la réservation
        </Button>
      </Surface>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  surface: {
    margin: 16,
    padding: 16,
    elevation: 4,
    borderRadius: 10,
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
  },
});

export default BookingScreen;
