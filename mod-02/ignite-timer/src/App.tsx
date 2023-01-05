import { ThemeProvider } from "styled-components";
import { BrowserRouter } from 'react-router-dom';

import { Router } from "./Router";

import { CycleContextProvider } from "./contexts/CycleContext";

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/theme/default";

export function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <BrowserRouter>
                <CycleContextProvider>
                    <Router />
                </CycleContextProvider>
            </BrowserRouter>

            <GlobalStyle />
        </ThemeProvider>
    );
}
