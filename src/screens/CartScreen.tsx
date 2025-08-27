import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import ProductCard from '../components/ProductCard';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CartScreen() {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <View style={styles.container}>
                <Text style={styles.title}>🛒 Your Cart</Text>

                <FlatList
                    data={cartItems}
                    keyExtractor={(item, index) => item.id.toString() + index}

                    renderItem={({ item }) => (
                        <ProductCard
                            title={item.title}
                            description={item.description}
                            price={item.price}
                            image={item.image}
                            rating={item.rating}
                            isBtnShown={false}
                        />

                    )}
                    ListEmptyComponent={<Text style={styles.empty}>Cart is empty.</Text>}
                />

                <View style={styles.footer}>
                    <Text style={styles.total}>Total: ${totalPrice}</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    title: { fontSize: 20, fontWeight: 'bold', marginBottom: 12 },
    itemRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
    },
    name: { fontSize: 16 },
    price: { fontSize: 16, fontWeight: '500' },
    empty: { marginTop: 50, textAlign: 'center', fontStyle: 'italic' },
    footer: { paddingTop: 20, borderTopWidth: 1, borderTopColor: '#ddd' },
    total: { fontSize: 18, fontWeight: 'bold' },
});
