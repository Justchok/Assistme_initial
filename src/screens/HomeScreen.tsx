import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Title, Surface } from 'react-native-paper';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Surface style={styles.surface}>
        <Title style={styles.title}>Bienvenue sur Assist Services</Title>
        <Button 
          mode="contained" 
          onPress={() => navigation.navigate('Services')}
          style={styles.button}
        >
          Découvrir nos services
        </Button>
        <Button 
          mode="outlined" 
          onPress={() => navigation.navigate('Booking')}
          style={styles.button}
        >
          Réserver maintenant
        </Button>
      </Surface>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  surface: {
    padding: 20,
    elevation: 4,
    borderRadius: 10,
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    marginVertical: 10,
  },
});

export default HomeScreen;
