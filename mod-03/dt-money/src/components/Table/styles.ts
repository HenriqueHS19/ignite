import styled from "styled-components";

export const TableContainer = styled.table`
    width: 100%;
    margin-top: 1.5rem;
    border-collapse: separate;
    border-spacing: 0 0.5rem;

    tbody {
        width: 100%;
    
        td {
            background: ${props => props.theme["gray-700"]};
            padding: 1.2rem 2rem;
            font-size: 0.9rem;
            text-align: left;

            &:first-child {
                width: 50%;
                border-radius: 6px 0 0 6px;
            }
            &:last-child {
                text-align: right;
                border-radius: 0 6px 6px 0;
            }
        }
    }
`;

interface IPriceHighlight {
    variant: 'income' | 'outcome';
}

export const PriceHighlight = styled.span<IPriceHighlight>`
    color: ${props => props.variant === 'income' ? props.theme["green-200"] : props.theme["red-500"]};
`;