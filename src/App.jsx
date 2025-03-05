import Header from "./components/Header"
import Main from "./components/Main"

//context
// import { GlobalProvider } from './context/GlobalContext';

function App() {


  return (
    <>
      {/* <GlobalProvider> */}
        <Header />
        <Main />
        <h1>Hello world</h1>
      {/* </GlobalProvider> */}

    </>
  )
}

export default App
