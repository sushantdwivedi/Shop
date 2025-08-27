import React, { useState, useCallback } from 'react';
import { FlatList, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { generateProducts } from '../utils/mockProducts';
import { addToCart } from '../store/cartSlice';
import ProductCard from '../components/ProductCard';
import { SafeAreaView } from 'react-native-safe-area-context';

const allProducts = generateProducts(5000);
const PAGE_SIZE = 20;

export default function HomeScreen() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState(allProducts.slice(0, PAGE_SIZE));
  const dispatch = useDispatch();

  const loadMore = useCallback(() => {
    const nextPage = page + 1;
    const nextItemsCount = nextPage * PAGE_SIZE;

    if (nextItemsCount <= allProducts.length) {
      const nextData = allProducts.slice(0, nextItemsCount);
      setData(nextData);
      setPage(nextPage);
    }
  }, [page]);

  const renderItem = useCallback(
    ({ item }) => (
      <ProductCard
        title={item.title}
        description={item.description}
        price={item.price}
        image={item.image}
        rating={item.rating}
        isBtnShown={true}
        onAdd={() => dispatch(addToCart(item))}
      />
    ),
    [dispatch]
  );


  return (
    <SafeAreaView style={{  backgroundColor: '#fff'   }}>
      <View style={{ padding: 16 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Happy Shopping</Text>
        <Text style={{ marginTop: 4, fontStyle: 'italic', color: '#555' }}>
          "Shopping is an adventure, enjoy every step!"
        </Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        onEndReached={loadMore}
        initialNumToRender={20}
        
      />
    </SafeAreaView>
  );
}
