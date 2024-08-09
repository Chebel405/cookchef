import Footer from "./components/Footer";
import Header from "./components/Header";
import Content from "./components/Content";
import styles from './App.module.scss';

function App() {
  return (

    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <Header />
      <Footer />
      <Content />
    </div>

  )
}

export default App
