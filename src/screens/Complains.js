import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import moment from 'moment'
import Complaints from '../assets/complaints.json'

const Complain = () => {
    return (
        <View style={{ flex: 1, padding: 15, justifyContent: 'flex-start' }}>
            {
                Complaints.map((item) => (
                    <ComplainItem key={item.id} item={item} />
                ))
            }
        </View>
    )
}
export default Complain

const ComplainItem = ({ item }) => {
    return (
        <View style={{ padding: 15, backgroundColor: 'lightblue', borderRadius: 4, marginBottom: 15 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                <Text style={{ fontWeight: "bold" }}>#{item.id}</Text>
                <Text>{item.type}</Text>
            </View>
            <Text style={{ marginBottom: 10 }}>{item.workingStatus}</Text>
            <Text style={{ marginBottom: 10 }}>{item.society}</Text>
            <Text>{moment(item.reported).fromNow()}</Text>
            <TouchableOpacity style={{ padding: 15, backgroundColor: 'white', borderRadius: 5, alignSelf: 'flex-end' }}>
                <Text>
                    View
                </Text>
            </TouchableOpacity>
        </View>
    )
}