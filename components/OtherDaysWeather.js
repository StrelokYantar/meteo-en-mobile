import React from 'react';
import { StyleSheet, Image, ScrollView, Text, View } from 'react-native';


export default function OtherDaysWeather({ data }) {
    if (Object.keys(data).length !== 0) {
        const daily = data.daily
        const dayName = new Date(daily.dt * 1000).toLocaleString('fr-FR', { weekday: 'long', month: 'long', day: 'numeric' });

        console.log(data)

        console.log("dayName" + dayName)
        const JSXDaily = daily.map((daily, i) =>
            <View key={i} style={styles.other_days}>
                <Image style={styles.other_weather_icon} source={{ uri: `http://openweathermap.org/img/wn/` + daily.weather[0].icon + `@2x.png` }} />
                <View style={styles.other_weather_data}>
                    <View style={styles.other_weather_data_value_left}>
                        <Text style={styles.other_days_date}>{new Date(daily.dt * 1000).toLocaleString('fr-FR', { weekday: 'long', month: 'long', day: 'numeric' })}</Text>
                        <Text style={styles.other_weather}>{daily.weather[0].description}</Text>
                    </View>
                    <View style={styles.other_weather_data_value_right}>
                        <Text style={styles.other_temp_max}>{Math.ceil(daily.temp.max)}°</Text>
                        <Text style={styles.other_temp_min}>{Math.ceil(daily.temp.min)}</Text>
                    </View>
                </View>
            </View>
        );

        return (
            <View>
                {JSXDaily}
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
    other_days: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 25,
        paddingRight: 25,
        backgroundColor: '#14f5de',
        borderWidth: 1,
        borderColor: '#e6ecef',
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    other_weather_data: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    other_days_date: {
        fontSize: 17,
    },
    other_weather_icon: {
        width: 50,
        height: 50,
        marginRight: 15,
    },
    other_weather: {
        fontSize: 15,
    },
    other_temp_max: {
        fontSize: 17,
    },
    other_temp_min: {
        fontSize: 14,
        color: '#595c61',
    },
});