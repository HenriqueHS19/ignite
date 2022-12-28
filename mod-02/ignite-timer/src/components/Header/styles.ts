import styled from 'styled-components';

export const HeaderContainer = styled.header`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        width: 2.5rem;
        height: 2.5rem;
    }

    nav {

        display: flex;
        align-items: center;
        gap: 0.5rem;

        a {
            width: 3rem;
            height: 3rem;
            border-top: 3px solid transparent;
            border-bottom: 3px solid transparent;
            color: ${props => props.theme['gray-100']} ;
            text-decoration: none;
            transition: border-color .2s;

            display: flex;
            justify-content: center;
            align-items: center;

            &:hover {
                border-bottom-color: ${props => props.theme['green-500']};
            }

            &.active {
                color: ${props => props.theme['green-500']};
            }
        }
    }
`;