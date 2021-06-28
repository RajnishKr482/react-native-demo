import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const styles = StyleSheet.create({
    conatiner: {
        flex: 1
    },
    imageBack: {
        flex: 1,
        resizeMode: 'cover',

    },
    secondaryView: {
        flex: 1,
        // alignContent:"center",
        justifyContent: 'center',
        alignSelf: "center",
        marginHorizontal: 30,
        marginVertical: 20,
        // backgroundColor:"white"
    },
    signView: {
        // alignSelf: 'center',
        // justifyContent: 'center',
        padding: 40,
        // height:250,
        width: 350,
        // margin:20,
        // flex:1,
        borderRadius:20,
        backgroundColor: "white"
    },
    tomrexStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: "white"
    },
    textStyle: {

        // marginTop: 15,
        // // paddingLeft: 20,
        // fontSize: 18,
        // elevation:10,

        marginVertical: 15,
        backgroundColor: 'white'
    },
    touchView: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#2f7cf7",
        marginTop: 20,
    },
    signIn: {
        fontSize: 20,
        fontWeight: "bold"
    },
    signV: {
        alignItems: "center",
        justifyContent: 'center'
    },
    firstUseInput: {
        elevation: 10,
        backgroundColor: "white",
        marginTop: 20
    },
    usertext: {
        paddingRight: 10, paddingLeft: 10
    },
    signInButtonText: {
        fontSize: 19,
        padding: 10,
        color: "white",
        fontWeight: "bold"
    },
    passwordContainer: {
        flexDirection: "row",
        elevation: 10,
        backgroundColor: "white",
        marginTop: 15,
    },
    passwordText: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10
    },
    iconstyle: {
        alignSelf: "center",
        justifyContent: "center",
        marginRight: 15
    }
})


