import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "white"
    },
    secondConatiner: {
        margin: 20,
        // padding:20,
        elevation: 10,
        backgroundColor: "white",
        height: 400,
    },
    linerView: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 10,
        height: 75
    },
    iconStyle: {
        justifyContent: "flex-end",
        alignItems: "center",
        flexDirection: "row",
        flex: 1
    },
    todayText: {
        fontSize: 18,
        color: "white"
    },
    aprrovedText: {
        color: "white"
    }

});