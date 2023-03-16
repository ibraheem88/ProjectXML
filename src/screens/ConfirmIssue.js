import React from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import moment from 'moment'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Reports from '../assets/reports.json'
import { FlatList } from 'react-native-gesture-handler'

const ConfirmIssue = () => {
    const [selected, setSelected] = React.useState([])
    return (
        <View style={{ flex: 1, padding: 15, justifyContent: 'flex-start' }}>
            <FlatList
                style={{ flex: 1, flexGrow: 1 }}
                contentContainerStyle={{ paddingTop: 15 }}
                data={Reports}
                renderItem={({ item }) => (
                    <IssueItem key={item.id} item={item} selected={selected} setSelected={setSelected} />
                )}
            />
            <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: 'center', marginTop: 20 }}>
                <TouchableOpacity style={{ padding: 15, backgroundColor: '#3EB489', borderRadius: 5, alignSelf: 'flex-end', width: '45%' }}>
                    <Text style={{ color: '#FFF', textAlign: 'center', fontWeight: 'bold' }}>
                        Report
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ padding: 15, backgroundColor: '#F44336', borderRadius: 5, alignSelf: 'flex-end', marginLeft: 20, width: '45%' }}>
                    <Text style={{ color: '#FFF', textAlign: 'center', fontWeight: 'bold' }}>
                        Cancel
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default ConfirmIssue

const IssueItem = ({ item, selected, setSelected }) => {

    const handleSelected = () => {
        let arr = [...selected]
        if (selected.includes(item.id)) {
            const index = selected.indexOf(item.id)
            arr = [...arr.slice(0, index), ...arr.slice(index + 1, arr.length)]
            setSelected(arr)
        } else {
            arr.push(item.id)
            setSelected(arr)
        }
        console.log(arr)
    }

    return (
        <View style={{ padding: 15, backgroundColor: '#FFF', borderRadius: 10, marginBottom: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ marginBottom: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                    <Text style={{ fontWeight: "bold", marginRight: 5 }}>#{item.id}</Text>
                    <View style={{ backgroundColor: item.type === 'Social' ? '#3EB489' : '#F44336', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 5 }}>
                        <Text style={{ color: '#FFF' }}>{item.type}</Text>
                    </View>
                    <Icon name={selected.includes(item.id) ? "checkbox-blank-circle" : "checkbox-blank-circle-outline"} color="black" size={22} style={{ marginLeft: 10 }} onPress={() => handleSelected()}
                    />
                </View>
                <Text style={{ marginBottom: 5 }}>Reported on {moment(item.timestamp).format('MMMM Do, YYYY')}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', marginRight: 5 }}>Accuracy:</Text>
                    <Text>{item.accuracy}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', marginRight: 5 }}>Latitude:</Text>
                    <Text>{item.latitude}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', marginRight: 5 }}>Longitude:</Text>
                    <Text>{item.longitude}</Text>
                </View>
            </View>
            <Image source={{ uri: item.image }} style={{ width: 100, height: 100, borderRadius: 10 }} />
        </View >
    )
}