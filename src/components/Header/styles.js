import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 70px;
    background-color: #2800D1;
    border-bottom: 5px solid #56FF61;
    display: flex;
    
`;

export const Dside = styled.div`
    width: 50%;
    height: 100%;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    a{
        padding: 10px;
        color: white;
        font-size: 16px;
        font-weight: bold;
        text-decoration: none;
        background: none;
        border: none;
        cursor: pointer;

        &:hover{
        color:#56FF61;
        }
    }


    #bellNumber{
        display: flex;
        align-items: center;
        background: none;
        border: none;
        cursor: pointer;

        img{
            padding-right: 10px;
            padding-left: 5px;
            height: 30px;
        }

        span{
            width: 21px;
            height: 21px;
            color: #00AE0B; 
            background: white;

            display: flex;
            align-items: center; 
            justify-content: center;
            
            border-radius: 50%;
            position: relative;
            top: -10px;
            right: 24px;

            

        }

        &:hover{
            opacity: 0.5;
        }
    }

    .divider::after{
         content:"|";
         color: white;
         margin: 0px 8px;
         position: relative;
         top: -1px;
    }
`;

export const Lside = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;

    img{
        display: flex;
        height: 40px;
        padding: 0 30px;
    }
`;