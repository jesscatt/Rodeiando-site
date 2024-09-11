import React from 'react';
import { View, Text, StyleSheet, Image, Button, ScrollView, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const data = [
  {
    title: '31º Rodeio Crioulo Internacional',
    date: '21 a 31 Janeiro 2016',
    location: 'Vacaria/RS',
    imageUrl: 'https://example.com/rodeio.jpg',
  },
];

const HomeScreen = ({ navigation }) => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.carouselItem}>
        <Image style={styles.carouselImage} source={{ uri: item.imageUrl }} />
        <TouchableOpacity style={styles.accessButton} onPress={() => alert('Acessar Rodeio')}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Início</Text>
      </View>

      <View style={styles.carouselContainer}>
        <Carousel
          data={data}
          renderItem={renderItem}
          sliderWidth={300}
          itemWidth={300}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Nossa História</Text>
        <Text style={styles.sectionText}>
          O rodeiando foi criado para suprir a necessidade dos patrões de CTG
          poderem centralizar certas demandas como as inscrições dos rodeios.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Produtos</Text>
        <View style={styles.productsContainer}>
          <TouchableOpacity style={styles.productItem} onPress={() => alert('Planos')}>
            <Text style={styles.productText}>Planos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.productItem} onPress={() => alert('Parceiros')}>
            <Text style={styles.productText}>Parceiros</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.productItem} onPress={() => alert('Lucro')}>
            <Text style={styles.productText}>Lucro</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.moreButton} onPress={() => alert('Ver mais')}>
        <Text style={styles.moreButtonText}>Ver mais</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


