import { Image } from 'expo-image';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface Props {
  title: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  isBtnShown?: boolean;
  onAdd: () => void;
}

function ProductCardComponent({ title, description, price, image, rating, onAdd, isBtnShown }: Props) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {description}
        </Text>
        <Text style={styles.rating}>⭐ {rating?.toFixed(1)}</Text>
        <View style={styles.bottomRow}>
          <Text style={styles.price}>${price?.toFixed(2)}</Text>
          {isBtnShown && (
            <TouchableOpacity onPress={onAdd} style={styles.button}>
              <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}

export default React.memo(ProductCardComponent);


const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 16,
    marginVertical: 10,
    marginHorizontal: 16,
    padding: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 4,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 12,
    marginRight: 12,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111',
    fontFamily: 'System',
  },
  description: {
    fontSize: 13,
    color: '#666',
    marginVertical: 4,
    fontFamily: 'System',
  },
  rating: {
    fontSize: 12,
    color: '#999',
    marginBottom: 6,
  },
  price: {
    fontSize: 15,
    fontWeight: '600',
    color: '#222',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '500',
  },
});
