import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'

import ProductCard from './ProductCard'

var { width } = Dimensions.get('window')

const ProductLits = ({ item }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.content}>
        <ProductCard {...item} />
      </View>
    </TouchableOpacity>
  )
}

export default ProductLits

const styles = StyleSheet.create({
  container: {
    width: '50%'
  },
  content: {
    width: width / 2
  }
})
