import React, { useState, useEffect } from 'react'
import { StyleSheet, View, ActivityIndicator, FlatList, Dimensions } from 'react-native'
import { Container, Header, Icon, Item, Text, Input } from 'native-base'

import ProductList from './ProductLits'
import SearchedProducts from './SearchedProducts'
import Banner from '../../Shared/Banner'

const data = require('./products.json')

var { height } = Dimensions.get('window')

const ProductContainer = () => {
  const [products, setProducts] = useState([])
  const [productsFiltered, setProductsFiltered] = useState([])
  const [focus, setFocus] = useState()


  useEffect(() => {
    setProducts(data)
    setProductsFiltered(data)
    setFocus(false)

    return () => {
      setProducts([])
      setProductsFiltered([])
      setFocus()
    }
  }, [])

  const searchProduct = (text) => {
    setProductsFiltered(
      products.filter((item) => item.name.toLowerCase().includes(text.toLowerCase()))
    )
  }

  const openList = () => {
    setFocus(true)
  }

  const onBlur = () => {
    setFocus(false)
  }

  return (
    <Container>
      <Header
        searchBar
        rounded
      >
        <Item>
          <Icon name='ios-search' />
          <Input
            placeholder='Search'
            onFocus={openList}
            onChangeText={(text) => { searchProduct(text) }}
          />
          {
            focus
              ?
              (
                <Icon onPress={onBlur} name='ios-close' />
              )
              :
              (
                null
              )
          }
        </Item>
      </Header>
      {
        focus
          ?
          (
            <SearchedProducts productsFiltered={productsFiltered} />
          )
          :
          (
            <View style={styles.container}>
              <View>
                <Banner />
              </View>
              <Text>Products</Text>
              <View style={styles.listContainer}>
                <FlatList
                  numColumns={2}
                  data={products}
                  renderItem={({ item }) => <ProductList
                    key={item.id}
                    item={item}
                  />}
                  keyExtractor={(item) => item.name}
                />
              </View>
            </View>
          )
      }

    </Container>

  )
}

export default ProductContainer

const styles = StyleSheet.create({
  container: {
    // flexWrap: "wrap",
    backgroundColor: "gainsboro",

  },
  listContainer: {
    height: height,
    //flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
    backgroundColor: "gainsboro",

  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});