import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

const Home = ({ navigation }) => {
    return (
        <View style={{ flex: 1, padding: 15, justifyContent: 'flex-start' }}>
            <HomeButton name="Raise an Issue" onPress={() => navigation.navigate("Report Issue")} />
            <HomeButton name="Complain Log" onPress={() => navigation.navigate("Complains")} />
            <HomeButton name="Donate" />
            <HomeButton name="Donation Log" />
            <HomeButton name="Feedback" />
        </View>
    )
}
export default Home

const HomeButton = ({ name, onPress }) => {
    return (
        <TouchableOpacity style={{ padding: 15, backgroundColor: 'lightblue', alignSelf: "center", alignItems: 'center', borderRadius: 4, marginBottom: 15 }}
            onPress={onPress}>
            <Text>{name}</Text>
        </TouchableOpacity>
    )
}