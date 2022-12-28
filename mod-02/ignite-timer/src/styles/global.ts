import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${props => props.theme['gray-900']};
        color: ${props => props.theme['gray-300']};
    }

    body, input, textarea, button {
        font: 1rem 400 'Roboto', sans-serif;
    }

    button {
        cursor: pointer;
    }
`;