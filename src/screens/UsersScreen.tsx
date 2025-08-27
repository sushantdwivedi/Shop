import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function UsersScreen() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const net = await NetInfo.fetch();
            if (net.isConnected) {
                const res = await fetch('https://jsonplaceholder.typicode.com/users');
                const json = await res.json();
                await AsyncStorage.setItem('users', JSON.stringify(json));
                setUsers(json);
            } else {
                const cache = await AsyncStorage.getItem('users');
                if (cache) setUsers(JSON.parse(cache));
            }
        };

        fetchUsers();
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <FlatList
                data={users}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={{ padding: 16, borderBottomColor: '#eee', borderBottomWidth: 1 }}>
                        <Text style={{ fontSize: 16 }}>{item.name}</Text>
                    </View>
                )}
            />
        </SafeAreaView>
    );
}
