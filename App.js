import React, { useState, useEffect} from 'react';
import CurrentWeather from './components/CurrentWeather';
import OtherDaysWeather from './components/OtherDaysWeather';
import { StyleSheet, Image, ScrollView, Text, View } from 'react-native';
import axios from 'axios';

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {

    axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=50.4291723&lon=2.8319805&units=metric&lang=fr&exclude=minutely,hourly,alerts&appid=348423add36511b1c1c01fcbd408e1bb`)

        .then(res => {
            setData(res.data)
        })
}, []);
  return (
    <ScrollView style={styles.main}>
      <CurrentWeather data={data} />
      <View>
        <OtherDaysWeather data={data} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#01e7eb',
  },
});