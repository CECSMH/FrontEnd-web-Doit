import styled from 'styled-components';

export const Container = styled.div`
    width: 230px;
    height: 80px;
    background-color: ${props => props.active ? '#00AE0B': '#2800D1'};
    display: flex;
    border-radius: 6px;
    flex-direction: column;
    cursor: pointer;

    img{
        height: 20px;
        width: 22px;
        padding: 15px;
    }

    p{
        color: white;
        align-self: flex-end;
        justify-content: flex-end;
        margin: 10px;
        font-weight: bold;
    }
    
    &:hover{
        background: #56FF61;
    }
`;