import {  Contacts,  SidebarMenu, Team,  } from './pages';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from '@mui/material'; // reset all default css
import { ColorModeContext, useMode } from './styles/theme';


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
              
              </Routes>

            </section>

          </main>
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App