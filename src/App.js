import { useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Banner from "./components/Main/Banner/Banner";
import Content from "./components/Main/Content/Content";
import { MusicContextProvider } from "./context/MusicContext";
import { CartContextProvider } from "./context/CartContext";

function App() {
  return (
    <MusicContextProvider>
      <CartContextProvider>
        <Header />
        <main>
          <Banner />
          <Content />
        </main>
        <Footer />
      </CartContextProvider>
    </MusicContextProvider>
  );
}

export default App;
