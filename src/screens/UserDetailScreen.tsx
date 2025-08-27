import React from 'react';
import { View, Text } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

type RouteParams = {
    UserDetail: { id: string };
};

export default function UserDetailScreen() {
    const route = useRoute<RouteProp<RouteParams, 'UserDetail'>>();
    const { id } = route.params;

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ padding: 20 }}>
                <Text style={{ fontSize: 18 }}>User ID: {id}</Text>
            </View>
        </SafeAreaView>
    );
}
