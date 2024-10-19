import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, SafeAreaView } from 'react-native';

const EntryFileFor = ({ duration = 30 }) => {
  const [seconds, setSeconds] = useState(0);
  const progress = useRef(new Animated.Value(0)).current;
  const text = "Stop Watching";
  const textRefs = useRef([]);
  const [letterPositions, setLetterPositions] = useState([]);

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 1,
      duration: duration * 100,
      useNativeDriver: false,
    }).start();

    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [duration, progress]);

  useEffect(() => {
    // Measure the positions of each letter
    const positions = [];
    textRefs.current.forEach((ref, index) => {
      ref.measure((fx, fy, width, height, px, py) => {
        positions[index] = px;
        if (positions.length === text.length) {
          setLetterPositions(positions);
        }
      });
    });
  }, [text]);

  const progressWidth = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  const getLetterColor = (index) => {
    if (!letterPositions.length) return '#000';
    const letterPosition = letterPositions[index] || 0;
    const barWidth = 300; // Assuming the progress bar width is 300
    const progressPoint = letterPosition / barWidth;
    return progress.interpolate({
      inputRange: [progressPoint - 0.06, progressPoint],
      outputRange: ['#000', '#00ff00'],
      extrapolate: 'clamp',
    });
  };

  return (
    <SafeAreaView>
    <View style={styles.container}>
      <View style={styles.progressBarBackground}>
        <Animated.View style={[styles.progressBarFill, { width: progressWidth }]} />
        <View style={styles.textContainer}>
          {text.split('').map((letter, index) => (
            <Animated.Text
              key={index}
              ref={(el) => (textRefs.current[index] = el)}
              style={[styles.timerText, { color: getLetterColor(index) }]}
            >
              {letter}
            </Animated.Text>
          ))}
        </View>
      </View>
      <Text style={styles.timerText}>{seconds} seconds</Text>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  textContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: '50%',
    left: '10%',
    width: '80%',
    justifyContent: 'center',
  },
  timerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  progressBarBackground: {
    width: '80%',
    height: 60,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#76c7c0',
    position: 'absolute',
    left: 0,
    top: 0,
  },
});

export default EntryFileFor;

