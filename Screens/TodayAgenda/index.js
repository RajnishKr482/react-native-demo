import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { styles } from '../TodayAgenda/style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
// import LinearGradient from 'react-native-linear-gradient';
import LinearGradient from 'react-native-linear-gradient';



const index = () => {
    return (
        <View style={styles.container}>
            <View style={styles.secondConatiner}>
                <LinearGradient start={{ x: 0.5, y: 0.25 }} end={{ x: 2, y: 0.25 }}
                    locations={[0, 0.5, 0.6]} style={styles.linerView}
                    colors={['#ff00cc', '#3b5998', '#333399']}>
                    <Icon name="calendar" size={35} color="white" />
                    <View style={{ flexDirection: "column", marginLeft: 15 }}>
                        <Text style={styles.todayText}>
                            Today's Agenda
                        </Text>
                        <Text style={styles.aprrovedText}>
                            Approved agendas for Today
                        </Text>

                    </View>
                    <View style={styles.iconStyle}>
                    <Icon name="arrow-right" size={35} color="white"/>
                    </View> 
                </LinearGradient>

            </View>

        </View>
    )
}

export default index

