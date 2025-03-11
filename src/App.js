// import './App.css';
// import HookUse from './HookUseRef';
// import HighOrder from './HighOrder';
import { createContext } from 'react';
// import HooksUseMemo from './HooksUseMemo';
// import CompC from './CompC';
// import CompA from './CompA';
import PageRouting from './PageRouting';
import { Routes, Route,BrowserRouter, Outlet } from 'react-router';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Login from './Login';  
import { LoginContext } from './LoginContext';
import PrivateLogin from './PrivateLogin';
import Products from './Products';
// import Hooks from './Hooks.js';
// import BatchUpdate from './BatchUpdate';
// import Counter from './Counter';
// import Form from './Form';
//const HooksMemo = HighOrder(HooksUseMemo);
const cContext = createContext();
function App() {
  
  return (
    <>
    <cContext.Provider value={{name: "codebreaker"}}>
      <LoginContext>
      <BrowserRouter>
      <div className="App">
        {/* <BatchUpdate /> */}
        {/* <Counter /> */}
        {/* <Form /> */}
        {/* <Hooks /> */}
        {/* <HookUse/> */}
        {/* <HooksMemo /> */}
        {/* <HooksUseMemo /> */}
        <PageRouting />
       <Routes>
          <Route element={<PrivateLogin><Outlet/></PrivateLogin>}>
            <Route path="/home/:email" element={
                <Home />
            } />
            <Route path="/about" element={
                <About />
            } />
            <Route path="/contact" element={
                <Contact />
            } />
          </Route>
          <Route path="/product" element={ <Products />} />
         <Route path="/login" element={<Login />} />
       </Routes>
      </div>
      </BrowserRouter>
      </LoginContext>
      </cContext.Provider>
    </>
  );
}

export default App;
export {cContext};
