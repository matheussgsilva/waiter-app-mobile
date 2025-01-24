import { FlatList } from "react-native";

import { products } from "../../mocks/products";
import { Text } from "../Text";

import React, { useState } from "react";
import { Product } from "../../types/Product";
import { formatCurrency } from "../../utils/formatCurrency";
import { PlusCircle } from "../Icons/PlusCircle";
import { ProductModal } from "../ProductModal";
import { AddToCartButton, ProductContainer, ProductImage, Separator } from "./styles";

interface MenuProps {
  onAddToCart: (product: Product) => void;
}

export function Menu({ onAddToCart}: MenuProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<null | Product>(null);

  function handleOpenModal(product: Product) {
    setIsModalVisible(true);
    setSelectedProduct(product);
  }

  return (
    <>
      <ProductModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        product={selectedProduct}
        onAddToCart={onAddToCart}
      />

      <FlatList
        data={products}
        style={{ marginTop: 32 }}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        keyExtractor={product => product._id}
        ItemSeparatorComponent={Separator}
        renderItem={({ item: product}) => (
          <ProductContainer onPress={() => handleOpenModal(product)}>
            <ProductImage
              souurce={{
                uri: `http://192.168.0.16:3001/uploads/${product.imagePath}`,
              }}
            />

            <Text weight={600} >{product.name}</Text>
            <Text size={14} color="#666" style={{ marginVertical: 8 }} >{product.description}</Text>
            <Text size={14} weight={600} >{formatCurrency(product.price)}</Text>

            <AddToCartButton onPress={() => onAddToCart(product)}>
              <PlusCircle />
            </AddToCartButton>
          </ProductContainer>
        )}
      />
    </>
  );
}
