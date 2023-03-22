import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    background: ${props => props.theme["gray-900"]};
    padding-top: 2.5rem;
    padding-bottom: 7.5rem; 

    div {
        width: 100%;
        max-width: 75rem;
        margin: 0 auto;
        padding: 0 1.5rem;

        display: flex;
        justify-content: space-between;
        align-items: center;

        img {
            width: 10rem;
        }

        button {
            width: 9.3rem;
            height: 3.1rem;
            background: ${props => props.theme["green-500"]};
            border: none;
            border-radius: 6px;
            padding: 0.7rem 1.2rem;

            font-size: 0.9rem;
            font-weight: 700;
            color: ${props => props.theme.white};

            &:hover {
                background: ${props => props.theme["green-200"]};
            }
        }
    }
    
`