import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    

    #content {
        width: 500px;
        

        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 50px;
        
        border: 1px solid #2800D1;
        border-radius: 5px;
        color: #00AE0B;

        p{
            margin: 20px;
            justify-self: flex-end;
        }
    }
`;

export const Code = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 10px;

    button{
        background: none;
        border: none;
    }
`;