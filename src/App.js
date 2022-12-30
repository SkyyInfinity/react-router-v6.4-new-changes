import './App.css';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import { Outlet } from 'react-router-dom';

const App = () => {

    return <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>;
}

export default App;
