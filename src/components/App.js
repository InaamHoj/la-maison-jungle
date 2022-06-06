import Banner from "./Banner";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import "../styles/index.css";

function App() {
  return (
    <div>
      <Banner />
      <div className="main-container">
        <Cart /> <ShoppingList />
      </div>
    </div>
  );
}

export default App;
