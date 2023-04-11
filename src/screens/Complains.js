import React from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import moment from 'moment';
import Complaints from '../assets/complaints.json';

const Complain = () => {
    return (
        <View style={{ flex: 1, padding: 15, justifyContent: 'flex-start' }}>
            <FlatList
                style={{ flexGrow: 1 }}
                contentContainerStyle={{ paddingTop: 15 }}
                data={Complaints}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <ComplainItem item={item} />}
            />
        </View>
    );
};

export default Complain;

const ComplainItem = ({ item }) => {
    return (
        <TouchableOpacity
            style={{
                padding: 15,
                backgroundColor: 'white',
                borderRadius: 4,
                marginBottom: 15,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.2,
                shadowRadius: 1,
                elevation: 2,
            }}
        >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 16,color: 'black' }}>#{item.id}</Text>
                <Text style={{ fontSize: 16,color: 'black' }}>{item.type}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
                <Text style={{ fontWeight: 'bold', marginRight: 5,color: 'black' }}>Working Status:</Text>
                <Text style={{color: 'black'}}>{item.workingStatus}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
                <Text style={{ fontWeight: 'bold', marginRight: 5,color: 'black' }}>Society:</Text>
                <Text style={{color: 'black'}}>{item.society}</Text>
            </View>
            <Text style={{ marginBottom: 10 ,color: 'black'}}>{moment(item.reported).fromNow()}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                <TouchableOpacity
                    style={{
                        paddingVertical: 10,
                        paddingHorizontal: 20,
                        backgroundColor: '#00BFFF',
                        borderRadius: 5,
                        marginRight: 10,
                    }}
                >
                    <Text style={{ color: 'white' }}>View</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        paddingVertical: 10,
                        paddingHorizontal: 20,
                        backgroundColor: '#DC143C',
                        borderRadius: 5,
                    }}
                >
                    <Text style={{ color: 'white' }}>Delete</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
};