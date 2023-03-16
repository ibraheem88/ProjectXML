import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import moment from 'moment'
import Complaints from '../assets/complaints.json'
import { RNCamera, FaceDetector } from 'react-native-camera';

const ReportIssue = ({ navigation }) => {
    return (
        <View style={{ flex: 1, padding: 15, justifyContent: 'flex-start' }}>
            <RNCamera style={{ height: '80%' }} type={RNCamera.Constants.Type.back} captureAudio={false} />
            <TouchableOpacity style={{ padding: 15, backgroundColor: 'lightblue', marginTop: 10, alignSelf: 'center', borderRadius: 4, width: 150, alignItems: 'center' }}
                onPress={() => navigation.navigate("Confirm Issue")}>
                <Text>Report</Text>
            </TouchableOpacity>
        </View>
    )
}
export default ReportIssue