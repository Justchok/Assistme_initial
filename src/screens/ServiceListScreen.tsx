import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { List, Card, Title, Paragraph } from 'react-native-paper';

const services = [
  {
    id: 1,
    title: 'Livraison de repas',
    description: 'Service de livraison de repas à domicile',
    icon: 'food',
  },
  {
    id: 2,
    title: 'Entretien du domicile',
    description: 'Service de nettoyage et entretien',
    icon: 'home',
  },
  {
    id: 3,
    title: 'Téléassistance seniors',
    description: 'Assistance et support pour les seniors',
    icon: 'phone',
  },
  {
    id: 4,
    title: 'Accompagnement médical',
    description: 'Accompagnement aux rendez-vous médicaux',
    icon: 'medical-bag',
  },
  {
    id: 5,
    title: 'Courses',
    description: 'Service de courses au marché ou supermarché',
    icon: 'cart',
  },
  {
    id: 6,
    title: 'Bricolage',
    description: 'Petits travaux de bricolage',
    icon: 'tools',
  }
];

const ServiceListScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {services.map((service) => (
        <Card 
          key={service.id} 
          style={styles.card}
          onPress={() => navigation.navigate('Booking', { service })}
        >
          <Card.Content>
            <Title>{service.title}</Title>
            <Paragraph>{service.description}</Paragraph>
          </Card.Content>
          <Card.Actions>
            <List.Icon icon={service.icon} />
          </Card.Actions>
        </Card>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  card: {
    marginVertical: 5,
  },
});

export default ServiceListScreen;
