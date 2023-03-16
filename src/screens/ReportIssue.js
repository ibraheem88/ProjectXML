import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import moment from 'moment';
import Complaints from '../assets/complaints.json';
import { RNCamera, FaceDetector } from 'react-native-camera';

const ReportIssue = ({ navigation }) => {
    const [cameraRef, setCameraRef] = useState(null);
    const [photo, setPhoto] = useState(null);

    const handleCapture = async () => {
        if (cameraRef) {
            const options = { quality: 0.5, base64: true };
            const data = await cameraRef.takePictureAsync(options);
            setPhoto(data.uri);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.cameraContainer}>
                {photo ? (
                    <ImageBackground source={{ uri: photo }} style={styles.cameraPreview} />
                ) : (
                    <RNCamera
                        ref={ref => {
                            setCameraRef(ref);
                        }}
                        style={styles.cameraPreview}
                        type={RNCamera.Constants.Type.back}
                        captureAudio={false}
                        autoFocus={RNCamera.Constants.AutoFocus.on}
                        flashMode={RNCamera.Constants.FlashMode.off}
                    />
                )}
                <TouchableOpacity style={styles.captureButton} onPress={handleCapture}>
                    <Text style={styles.captureButtonText}>Take Photo</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.reportButton} onPress={() => navigation.navigate("Confirm Issue")}>
                <Text style={styles.reportButtonText}>Report Issue</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F6F6',
        padding: 20,
    },
    cameraContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    cameraPreview: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    captureButton: {
        backgroundColor: '#fff',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
        marginVertical: 20,
    },
    captureButtonText: {
        color: '#1E90FF',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    reportButton: {
        backgroundColor: '#1E90FF',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
        marginTop: 20,
        alignSelf: 'center',
    },
    reportButtonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default ReportIssue;