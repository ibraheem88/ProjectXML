import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Welcome to Dubrovnik!</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <HomeButton name="Raise an Issue" onPress={() => navigation.navigate("Report Issue")} />
                <HomeButton name="Complain Log" onPress={() => navigation.navigate("Complains")} />
                <HomeButton name="Donate" />
                <HomeButton name="Donation Log" />
                <HomeButton name="Feedback" />
            </View>
        </View>
    );
};

const HomeButton = ({ name, onPress }) => {
    return (
        <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
            <Text style={styles.buttonText}>{name}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F6F6',
        padding: 20,
    },
    header: {
        paddingTop: 40,
        paddingBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonsContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        paddingVertical: 15,
        paddingHorizontal: 30,
        backgroundColor: '#1E90FF',
        borderRadius: 10,
        marginBottom: 15,
    },
    buttonText: {
        fontSize: 16,
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default Home;