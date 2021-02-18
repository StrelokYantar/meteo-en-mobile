import React, { useEffect } from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';

export default function CurrentWeather({ data }) {
    if (Object.keys(data).length !== 0) {

        const today = data.current;
        const todayName = new Date(today.dt * 1000).toLocaleString('fr-FR', { weekday: 'long', month: 'long', day: 'numeric' });
        const todayCurrentTemp = today.temp;
        const maxTemp = data.daily[0].temp.max
        const todayWeatherIcon = { uri: `http://openweathermap.org/img/wn/` + today.weather[0].icon + `@2x.png`}
        const weatherType = today.weather[0].description

        return (
            <View style={styles.header}>
                <Text style={styles.current_day_date}>{todayName}</Text>
                <View style={styles.current_weather_data}>
                    <View style={styles.current_weather_data_value_left}>
                        <Text style={styles.current_temp}>{Math.ceil(todayCurrentTemp)}°</Text>
                        <Text style={styles.current_temp_feel}>{Math.ceil(maxTemp)}°</Text>
                    </View>
                    <View style={styles.current_weather_data_value_right}>
                        <Image style={styles.current_weather_icon} source={todayWeatherIcon} />
                        <Text style={styles.current_weather}>{weatherType}</Text>
                    </View>
                </View>
            </View>
        );
    }
    else {
        return (
            <View>
                <Text>Loading..</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        paddingTop: 40,
        paddingLeft: 20,
        paddingRight: 20,
        height: 220,
        backgroundColor: '#1045a0',
    },
    current_weather_data: {
        flex: 1,
        flexDirection: 'row',
    },
    current_weather_data_value_right: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    current_weather_data_value_left: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    current_day_date: {
        fontSize: 18,
        marginBottom: 5,
        color: 'white',

    },
    current_weather: {
        position: 'absolute',
        top: 85,
        fontSize: 20,
        color: 'white',

    },
    current_weather_icon: {
        width: 100,
        height: 100,

    },
    current_temp: {
        fontSize: 60,
        color: 'white',

    },
    current_temp_feel: {
        color: 'white',
        fontSize: 30,

    },
});