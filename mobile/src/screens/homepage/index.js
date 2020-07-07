import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Platform,
  StatusBar,
  SafeAreaView,
  Button,
} from 'react-native';
import AdviserSVG from '../../../assets/icons/coronadr.svg';
import { data as CountryData, countryCases } from '../../data';
import { useNavigation } from '@react-navigation/native';

import {
  HeaderSVG,
  CountryPicker,
  CasesContainer,
  MapGenerator,
} from '../../components';

import { generateDateAndMonth } from '../../helper';

const App = () => {
  const [country, setCountry] = useState('IND');
  const navigation = useNavigation();

  const handlePrecautionViewButton = () => {
    navigation.navigate('Precaution');
  };

  return (
    <SafeAreaView>
      <ScrollView>
        {Platform.OS === 'android' && (
          <StatusBar backgroundColor="#021B79" barStyle="light-content" />
        )}
        <HeaderSVG
          SVG={AdviserSVG}
          svgHeight={700}
          svgWidth={300}
          LinearColors={['#021B79', '#0575E6']}
          tagLine="All you need is Stay at Home"
        />
        <CountryPicker
          countryData={CountryData}
          country={country}
          setCountry={setCountry}
        />
        <View style={styles.textContainer}>
          <View>
            <Text style={styles.casesUpdateText}>Case Update</Text>
            <Text style={styles.updateDateText}>
              Newest Update{' '}
              {generateDateAndMonth(
                new Date().getDate(),
                new Date().getMonth(),
              )}
            </Text>
          </View>
          <View>
            <TouchableOpacity>
              <Text style={styles.seeDetailsText}> See details </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.CasesContainer}>
          <CasesContainer
            Infected={5647526}
            Deaths={270890}
            Recovered={450012}
          />
        </View>
        <View style={styles.textContainer}>
          <View>
            <Text style={styles.casesUpdateText}>Spread of Virus</Text>
          </View>
          <View>
            <TouchableOpacity>
              <Text style={styles.seeDetailsText}> See details </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.mapContainer}>
          <MapGenerator countryCases={countryCases} />
        </View>
        <View style={styles.precautionContainer}>
          <View>
            <Text style={styles.precautionHeading}> Precautions </Text>
            <Text style={styles.precautionTagline}>
              Learn More about Precautions
            </Text>
          </View>
          <View style={styles.precautionButton}>
            <Button
              color="#0575E6"
              title="View"
              onPress={handlePrecautionViewButton}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  casesUpdateText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#424242',
  },
  updateDateText: {
    color: '#424242',
    fontSize: 13,
    fontWeight: '400',
  },
  seeDetailsText: {
    color: '#304ffe',
    fontWeight: '700',
  },
  CasesContainer: {
    marginHorizontal: 12,
  },
  mapContainer: {
    margin: 10,
  },
  precautionContainer: {
    margin: 20,
    marginBottom: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  precautionHeading: {
    fontSize: 20,
    color: '#021B79',
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
  precautionTagline: {
    fontSize: 15,
    fontWeight: '400',
  },
  precautionButton: {
    width: '30%',
  },
});

export default App;
