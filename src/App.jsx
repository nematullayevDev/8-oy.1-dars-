import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";
import { LeftContent } from "./components/LeftContent";

function App() {
  return (
    <div className="container">
      <Header></Header>

      <div className="flex">
        <div>
          <Hero></Hero>
          <Footer></Footer>
        </div>
        <div>
          <LeftContent></LeftContent>
        </div>
      </div>
    </div>
  );
}

export default App;
