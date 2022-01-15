import './App.scss';
import './colors.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './Components/Shared/Navigation/Navigation';
import NotFound from './Components/NotFound/NotFound';
import Footer from './Components/Shared/Footer/Footer';
import DashboardHome from './Components/DashboardHome/DashboardHome';
import DataProvider from './Context/DataProvider/DataProvider';

function App() {
   const data2 = [
    {
        browser: ['Chrome', 'Safari', 'Edge', 'Firefox'],
        country: ['India', 'United State', 'Australia', 'England', 'Canada', 'New Zeland','Ireland'],
        date: ['01/06', '02/06', '03/06', '04/06', '05/06', '06/06']
    }
  ]

  const result = data2[0].browser;



  return (
    <div className="App">
      <DataProvider >
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path='/' element={<DashboardHome />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </DataProvider>
    </div>
  );
}

export default App;
