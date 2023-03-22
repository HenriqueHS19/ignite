import styled from "styled-components";

export const SummaryContainer = styled.div`
    width: 100%;
    max-width: 75rem;
    margin: 0 auto;
    margin-top: calc(-8.7rem / 2);

    display: flex;
    align-items: center;
    gap: 2rem;
`;

export const Item = styled.div`
    flex: 1;
    height: 8.7rem;
    background: ${props => props.theme["gray-600"]};
    border-radius: 6px;
    padding: 1.5rem 2rem;

    display: flex;
    flex-direction: column;
    justify-content: center;

    header {
        width: 100%;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        p {
            font-size: 0.9rem;
            color: ${props => props.theme["gray-300"]};
        }
    }

    strong {
        font-size: 2rem;
        font-weight: 700;
        margin-top: 0.7rem;
    }

    &:last-child {
        background: ${props => props.theme["green-500"]};
    }
`;