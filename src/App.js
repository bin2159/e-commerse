import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Banner from "./components/Main/Banner/Banner";
import Content from "./components/Main/Content/Content";
import { MusicProductProvider } from "./context/MusicProduct";


function App() {
  return (
    <MusicProductProvider>
    <Header/>
    <main>
      <Banner/>
      <Content/>
    </main>
    <Footer/>
    </MusicProductProvider>
  );
}

export default App;
