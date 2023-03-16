import React from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import moment from 'moment'
import Reports from '../assets/reports.json'
import { FlatList } from 'react-native-gesture-handler'

const ConfirmIssue = () => {
    return (
        <View style={{ flex: 1, padding: 15, justifyContent: 'flex-start' }}>
            <FlatList
                style={{ flex: 1, flexGrow: 1 }}
                contentContainerStyle={{ paddingTop: 15 }}
                data={Reports}
                renderItem={({ item }) => (
                    <IssueItem key={item.id} item={item} />
                )}
            />
            <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: 'center', marginTop: 10 }}>
                <TouchableOpacity style={{ padding: 15, backgroundColor: 'lightblue', borderRadius: 5, alignSelf: 'flex-end' }}>
                    <Text>
                        Report
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ padding: 15, backgroundColor: 'lightblue', borderRadius: 5, alignSelf: 'flex-end', marginLeft: 10 }}>
                    <Text>
                        Cancel
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default ConfirmIssue

const IssueItem = ({ item }) => {
    return (
        <View style={{ padding: 15, backgroundColor: 'lightblue', borderRadius: 4, marginBottom: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ marginBottom: 10 }}>
                <Text style={{ fontWeight: "bold", marginBottom: 10 }}>#{item.id}</Text>
                <Text style={{ marginBottom: 10 }}>{item.type}</Text>
                <Text style={{ marginBottom: 10 }}>accuracy: {item.accuracy}</Text>
                <Text style={{ marginBottom: 10 }}>latitude: {item.latitude}</Text>
                <Text style={{ marginBottom: 10 }}>longitude: {item.longitude}</Text>
            </View>
            <Image source={{ uri: item.image }} style={{ width: '50%', height: '100%', alignSelf: 'flex-end' }} />
        </View >
    )
}