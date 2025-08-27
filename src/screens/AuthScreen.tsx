import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AuthScreen() {
    const [token, setToken] = useState('');

    useEffect(() => {
        const loadToken = async () => {
            await SecureStore.setItemAsync('authToken', 'MyNameIsBond007');
            const result = await SecureStore.getItemAsync('authToken');
            setToken(result || '');
        };
        loadToken();
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <View style={{ padding: 20 }}>
                <Text style={{ fontSize: 16 }}>Token: {token}</Text>
            </View>
        </SafeAreaView>
    );
}
