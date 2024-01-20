import {  Contacts,  SidebarMenu, Team, View,  } from './pages';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from '@mui/material'; // reset all default css
import { ColorModeContext, useMode } from './styles/theme';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Showtable from './pages/info/showtable';
import ViewData from './pages/info/View';


const App = () => {

  const [theme, coloMode] = useMode();

  return (
    <ColorModeContext.Provider value={coloMode}>
      <ThemeProvider theme={theme}>
        {/* Rest CSS */}
        <CssBaseline />

        <BrowserRouter>
          <main className="app">

            <SidebarMenu />

            <section className="content">
              {/* <Topbar /> */}

              <Routes>

          
                <Route path="/" element={<Team />} />
                <Route path="/items" element={<Contacts />} />
                <Route path="/show" element={<Showtable />} />
                
                <Route path="/view/:id" element={<ViewData/>} />
              </Routes>
              <ToastContainer />
            </section>

          </main>
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App