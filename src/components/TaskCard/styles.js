import styled from 'styled-components';

export const Container = styled.div`
    width: 272px;
    height: 150px;
    background-color: white;
    display: flex;
    border-radius: 8px;
    flex-direction: column;
    margin: 15px;
    cursor: pointer;
    transition: 0.2s;

    box-shadow: 1px 1px 12px 1px rgba(0,0,0,0.75);

    #top{
        width: 100%;
        display: flex;
        align-items: center;
        color: #00AE0B;
        font-size: 16px;

        img{
            height: 66px;
            margin: 15px;
        }
    }
    p{
        margin-right: 5px;
    }

    #bottom{
        display: flex;
        justify-content: space-between;
        margin: auto 10px 6px 10px;
        font-size: 18px;

        strong {
            color: #56FF61;
        }

        span{
            color: #2800D1;
            opacity: 0.7;
            
            img{
                height: 15px;
                margin-right: 2px;
            }
        }
    }

    &:hover{
        opacity: 0.6;
    }
`;