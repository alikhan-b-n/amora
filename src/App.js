import {ProductsTable} from "./components/ProductsTable"
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import classes from "./styles/app.module.css";
import {Diffusers} from "./diffusers";

function App() {
  return (
    <div>
        <div className={classes.body}>
            <header>
                <Header />
            </header>
            <main>
                <ProductsTable data={Diffusers}/>
            </main>
        </div>
        <footer className={classes.footer}>
            <Footer />
        </footer>
    </div>
  );
}

export default App;
