import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ActivityIndicator, FlatList } from 'react-native'

const data = require('./products.json')

const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts(data)

    return () => {
      setProducts([])
    }
  }, [])
  return (
    <View>
      <Text>Products</Text>
      <View style={{ marginTop: 100 }}>
        <FlatList
          horizontal
          data={products}
          renderItem={({ item }) => <Text>{item.brand}</Text>}
          keyExtractor={(item) => item.name}
        />
      </View>
    </View>
  )
}

export default Products

const styles = StyleSheet.create({})
