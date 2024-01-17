import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import ShoppingCart from "./pages/ShoppingCart";
import ProductPage from "./pages/ProductPage";
import ScrollToAnchor from "./components/ScrollToAnchor";

import products from "./components/products.js";
import Purchase from "./pages/Purchase.jsx";

console.log(products);

const initialShoppingList = [
  // {
  //   id: 1,
  //   name: "Green Japanese tea - 100g",
  //   price: 12.99,
  //   picture: "product1-picture.jpg",
  //   quantity: 5,
  //   subscribed: false,
  //   frequency: "",
  // },
  // {
  //   id: 2,
  //   name: "Red Japanese tea - 100g",
  //   price: 15.99,
  //   picture: "product2-picture.jpg",
  //   quantity: 14,
  //   subscribed: true,
  //   frequency: 3,
  //   discountedPrice: 14.39,
  // },
];

function App() {
  const [shoppingList, setShoppingList] = useState(initialShoppingList);

  function AddItem(item) {
    const shoppingListProductsIndexes = shoppingList.map(
      (product) => product.id
    );
    if (shoppingListProductsIndexes.includes(item.id)) {
      setShoppingList((products) =>
        products.map((product) =>
          item.id === product.id
            ? { ...product, quantity: item.quantity }
            : product
        )
      );
    } else {
      setShoppingList([...shoppingList, item]);
    }
  }

  function RemoveItem(item) {
    setShoppingList((shoppingList) =>
      shoppingList.filter((el) => el.id !== item.id)
    );
  }

  function IncreaseQuantity(id) {
    setShoppingList((products) =>
      products.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function DecreaseQuantity(id) {
    setShoppingList((products) =>
      products.map((item) =>
        item.quantity > 1 && item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  }

  return (
    <BrowserRouter>
      <ScrollToAnchor />
      <Routes>
        <Route
          path="/"
          element={<Home products={products} shoppingList={shoppingList} />}
        />

        <Route
          path="/shoppingcart"
          element={
            <ShoppingCart
              shoppingList={shoppingList}
              setShoppingList={setShoppingList}
              onRemoveItem={RemoveItem}
              onIncreaseQuantity={IncreaseQuantity}
              onDecreaseQuantity={DecreaseQuantity}
            />
          }
        />
        <Route
          path="/purchase"
          element={
            <Purchase
              shoppingList={shoppingList}
              setShoppingList={setShoppingList}
            />
          }
        />

        {products.map((product) => (
          <Route
            path={`/product${product.id}`}
            element={
              <ProductPage
                onAddItem={AddItem}
                shoppingList={shoppingList}
                products={products}
                index={product.id}
              />
            }
            key={product.id}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
