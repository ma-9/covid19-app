import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Platform,
  StatusBar,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import { HeaderSVG, Symptomps } from '../../components';
import DoctorSVG from '../../../assets/icons/Drcorona.svg';
import WearMask from '../../../assets/images/wear_mask.png';
import WashHands from '../../../assets/images/wash_hands.png';
import Icons from 'react-native-vector-icons/Feather';
import YoutubePlayer from 'react-native-youtube';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        {Platform.OS === 'android' && (
          <StatusBar backgroundColor="#021B79" barStyle="light-content" />
        )}
        <HeaderSVG
          SVG={DoctorSVG}
          svgHeight={700}
          svgWidth={300}
          LinearColors={['#021B79', '#0575E6']}
          tagLine="Get to know about covid 19"
        />
        <View style={styles.container}>
          <Symptomps />
        </View>
        <View style={styles.container}>
          <Text style={styles.heading}>Prevention</Text>
          <View style={styles.cards}>
            <Image style={styles.cardImage} source={WearMask} />
            <View style={styles.cardText}>
              <Text style={styles.textHeading}>Wear your mask</Text>
              <Text style={styles.textDescription}>
                Using face-masks in public is very useful in minimising
                community transmission and burden of COVID-19, provided their
                coverage level is high
              </Text>
            </View>
            <TouchableOpacity style={styles.cardIcon}>
              <Icons name="chevron-right" color="#021B79" size={30} />
            </TouchableOpacity>
          </View>
          <View style={styles.cards}>
            <Image style={styles.cardImage} source={WashHands} />
            <View style={styles.cardText}>
              <Text style={styles.textHeading}>Wash your hands</Text>
              <Text style={styles.textDescription}>
                Hand washing, also known as hand hygiene, is the act of cleaning
                one's hands to remove soil, grease, microorganisms, or other
                unwanted substances
              </Text>
            </View>
            <TouchableOpacity style={styles.cardIcon}>
              <Icons name="chevron-right" color="#021B79" size={30} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.YTVideoContainer}>
          <Text style={styles.YTText}> Learn How to Wash Hands </Text>
          <YoutubePlayer
            apiKey="AIzaSyALuL4qOhKp7JaVvZGgfIqSSmTZa6eXljQ"
            videoId="HHMa1dzhli0"
            style={styles.YoutubePlayer}
            controls={2}
            showFullscreenButton={true}
            showinfo={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    color: '#424242',
    fontWeight: '700',
    marginBottom: 10,
  },
  container: {
    margin: 10,
  },
  cards: {
    flexDirection: 'row',
    height: 220,
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    paddingVertical: 10,
    paddingHorizontal: 2,
    borderRadius: 20,
    borderBottomWidth: 5,
    marginVertical: 10,
  },
  cardImage: {
    position: 'relative',
    width: 150,
  },
  cardText: {
    position: 'absolute',
    width: '50%',
    marginLeft: 160,
  },
  cardIcon: {
    justifyContent: 'flex-end',
  },
  textHeading: {
    fontSize: 20,
    color: '#424242',
    marginBottom: 5,
  },
  textDescription: {
    color: '#424242',
    fontSize: 14,
    fontWeight: '400',
    letterSpacing: 1,
  },
  YTVideoContainer: {
    margin: 10,
  },
  YoutubePlayer: {
    height: 200,
  },
  YTText: {
    fontSize: 20,
    color: '#424242',
    fontWeight: '700',
    marginBottom: 20,
  },
});

export default App;
