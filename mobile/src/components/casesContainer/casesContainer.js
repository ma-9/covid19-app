import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Svg, Circle } from 'react-native-svg';

const CountryPicker = ({ Infected, Deaths, Recovered }) => {
  return (
    <View style={styles.root}>
      <TouchableOpacity style={styles.infectedCaseContainer}>
        <Svg height="50%" width="50%" viewBox="0 0 100 100">
          <Circle
            cx="50"
            cy="50"
            r="15"
            stroke="#ffd54f"
            strokeWidth="10"
            fill="#ffd54f"
          />
          <Circle
            cx="50"
            cy="50"
            r="5"
            stroke="#ff6f00"
            strokeWidth="10"
            fill="#ff6f00"
          />
        </Svg>
        <Text style={styles.InfectedText}> {Infected} </Text>
        <Text style={styles.bottomText}> Infected </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.deathCasesContainer}>
        <Svg height="50%" width="50%" viewBox="0 0 100 100">
          <Circle
            cx="50"
            cy="50"
            r="15"
            stroke="#ff8a65"
            strokeWidth="10"
            fill="#ff8a65"
          />
          <Circle
            cx="50"
            cy="50"
            r="5"
            stroke="red"
            strokeWidth="10"
            fill="red"
          />
        </Svg>
        <Text style={styles.DeathText}> {Deaths} </Text>
        <Text style={styles.bottomText}> Deaths </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.recoveredCasesContainer}>
        <Svg height="50%" width="50%" viewBox="0 0 100 100">
          <Circle
            cx="50"
            cy="50"
            r="15"
            stroke="#9ccc65"
            strokeWidth="10"
            fill="#9ccc65"
          />
          <Circle
            cx="50"
            cy="50"
            r="5"
            stroke="green"
            strokeWidth="10"
            fill="green"
          />
        </Svg>
        <Text style={styles.RecoveredText}> {Recovered} </Text>
        <Text style={styles.bottomText}> Recovered </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 20,
    borderColor: '#e0e0e0',
    backgroundColor: 'white',
    height: 100,
    paddingBottom: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderBottomWidth: 5,
  },
  infectedCaseContainer: {
    alignItems: 'center',
  },
  InfectedText: {
    color: 'orange',
    fontWeight: '700',
    fontSize: 20,
  },
  deathCasesContainer: {
    alignItems: 'center',
  },
  DeathText: {
    fontWeight: '700',
    fontSize: 20,
    color: 'red',
  },
  recoveredCasesContainer: {
    alignItems: 'center',
  },
  RecoveredText: {
    fontWeight: '700',
    fontSize: 20,
    color: 'green',
  },
  bottomText: {
    color: '#424242',
    fontSize: 15,
  },
});

export default CountryPicker;
