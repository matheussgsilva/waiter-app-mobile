import { FlatList } from "react-native";

import { products } from "../../mocks/products";
import { Text } from "../Text";

import { formatCurrency } from "../../utils/formatCurrency";
import { PlusCircle } from "../Icons/PlusCircle";
import { AddToCartButton, Product, ProductImage, Separator } from "./styles";

export function Menu() {
  return (
    <FlatList
      data={products}
      style={{ marginTop: 32 }}
      contentContainerStyle={{ paddingHorizontal: 24 }}
      keyExtractor={product => product._id}
      ItemSeparatorComponent={Separator}
      renderItem={({ item: product}) => (
        <Product>
          <ProductImage
            souurce={{
              uri: `http://192.168.0.16:3001/uploads/${product.imagePath}`,
            }}
          />

          <Text weight={600} >{product.name}</Text>
          <Text size={14} color="#666" style={{ marginVertical: 8 }} >{product.description}</Text>
          <Text size={14} weight={600} >{formatCurrency(product.price)}</Text>

          <AddToCartButton>
            <PlusCircle />
          </AddToCartButton>
        </Product>
      )}
    />
  );
}
