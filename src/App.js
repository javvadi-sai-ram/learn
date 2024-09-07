import './App.css';
import { Provider } from 'react-redux';
import store from './App/Store/bookStore/bookStore'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from './Frontend/Components/MainPage';
import { useState } from 'react';
import ProtectedRoute from './Route/ProtectedRoute';
import LoginPage from './Frontend/Components/Login/login';
import About from './Frontend/Components/InnerDetails/About/About';
import CodeContent from './Frontend/Components/CodeContentApp/Components/CodeContent/codeContent';

function App() {
  const [isAuthenticated,setIsAuthenticated]=useState(false)
  return (
    <Provider store={store} >
      <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
                <Route path="/" element={<LoginPage setIsAuthenticated={setIsAuthenticated}/>} />
                <Route path='/' element={<ProtectedRoute isAuthenticated={isAuthenticated}/>} >
                      <Route exact path="/Ram/home" element={<MainPage/>}/>
                      <Route exact path="/Ram/About" element={<About/>}/>
                      <Route exact path="/Ram/CodeContent" element={<CodeContent/>}/>
                </Route>
          </Routes>
      </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
