import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    min-width: 894px;
    display: flex;
    flex-direction: column;
    align-items: center;

    #content{
        width: 55%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 10px;
        margin-bottom: 70px;
    }

    #save{
        width: 70%;
        padding: 12px 0;
        border: 1px solid #2800D1;
        background: #2800D1;
        font-size: 22px;
        color: white;
        border-radius: 50px;
        margin-top: 40px;
        font-weight: bold;
        cursor: pointer;
    }
`;

export const Icons = styled.div`
    display: flex;
    justify-content: center;

    img{
        height: 55px;
        margin: 5px;
    }

    button{
        background: none;
        border: none;
    }

    .inative{
        opacity: 0.5;
    }
`;

export const Mid = styled.div`
    width: 70%;
    display:flex;
    flex-direction: column;
    

    span{
        font-size: 26px;
        color: #6C6C6C;
        margin-top: 30px;
        margin-bottom: 5px;
    }

    input {
        border: none;
        border-bottom: 1px solid #00AE0B;
        font-size: 22px;
        color: #242424;
    }

    textarea{
        height: 100px;
        border: 1px solid #00AE0B;
        border-radius: 8px;
        font-size: 22px;
        color: #242424;
        resize: none;
    }

    #time{
        width: 100%;
        display:flex;
        justify-content: space-between;
        color: #242424;

        img {
            height: 28px;
            margin: 5px;
        }

        span{
            display:flex;
            align-items: center;
        }
    }

    .times{
        display: flex;
        flex-direction: column;
        
        align-items: flex-start;

        img{
            
        }

        span{
            align-self: flex-start;
            justify-content: flex-start;
            margin: 0px 0;
        }
    }
`;

export const Bottom = styled.div`
    width: 70%;
    display: flex;
    justify-content: space-between;
    font-size: 22px;
    margin: 30px 0 10px 0;

    button{
        border: none;
        background: none;
        font-size: 22px;
        color:#2800D1;
        font-weight: bold;
        cursor: pointer;
    }

    span{
        color: #00AE0B;
        font-weight: bold;
        position:relative;
        bottom: 3px;
        margin-left: 2px;
    }

    /*######### TOGGLE SWITCH########*/

    .switch {
    visibility: hidden;
    position: absolute;
    margin-left: -9999px;
    }

    .switch + label {
    display: inline-block;
    position: relative;
    cursor: pointer;
    outline: none;
    user-select: none;
    }

    .shadow + label {
    padding: 2px;
    width: 40px;
    height: 20px;
    background-color: #dddddd;
    border-radius: 60px;
    }

    .shadow + label:before,
    .shadow + label:after {
    display: block;
    position: absolute;
    top: 1px;
    left: 1px;
    bottom: 1px;
    content: "";
    }

    .shadow + label:before {
    right: 1px;
    background-color: #f1f1f1;
    border-radius: 60px;
    transition: background 0.4s;
    }

    .shadow + label:after {
    width: 24px;
    background-color: #fff;
    border-radius: 100%;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    transition: all 0.4s;
    }

    .shadow:checked + label:before {
    background-color: #00AE0B;
    }
    .shadow:checked + label:after {
    transform: translateX(18px);
    }

`;