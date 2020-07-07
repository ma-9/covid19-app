import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import VirusIcons from '../../../assets/images/virus.png';
import LinearView from 'react-native-linear-gradient';

const HeaderSVG = (props) => {
  const { SVG, svgHeight, svgWidth, tagLine, LinearColors } = props;
  return (
    <View>
      <LinearView
        colors={LinearColors}
        start={{ x: 0, y: 1 }}
        style={styles.root}>
        <View style={styles.svgContainer}>
          <SVG width={svgWidth} height={svgHeight} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}> {tagLine} </Text>
        </View>
        <View style={styles.VirusContainer}>
          <Image source={VirusIcons} />
        </View>
      </LinearView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    height: 250,
    overflow: 'hidden',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  svgContainer: {
    position: 'relative',
  },
  textContainer: {
    position: 'absolute',
    marginLeft: '50%',
    marginTop: '20%',
  },
  text: {
    color: 'white',
    fontSize: 25,
    fontWeight: '500',
    textAlign: 'left',
  },
  VirusContainer: {
    position: 'absolute',
    marginLeft: '-5%',
  },
});

export default HeaderSVG;
