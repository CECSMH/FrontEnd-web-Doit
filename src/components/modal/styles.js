import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    position: absolute;
    left: 0;
    top: 0;
    background: rgba(0,0,0, 0.7);

    display:flex;
    justify-content: center;
    align-items: center;

    #content {
        width: 42%;
        min-width: 486px;
        background: white;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;

        animation: appear 250ms ease-in 1;
    }

    @keyframes appear {
        0%{
            opacity: 0;
            transform: translateY(20px);
        }}
`;

export const Top = styled.div`
    width: 100%;
    display:flex;
    justify-content: space-between;


    img{
        height: 25px;
        margin: 10px;
    }

    button{
        background: none;
        border: none;
    }
`;

export const Mid = styled.div`
    width: 86%;
    display:flex;
    flex-direction: column;

    span{
        font-size: 26px;
        color: #6C6C6C;
        margin-top: 40px;
        margin-bottom: 5px;
    }

    input {
        border: none;
        border-bottom: 1px solid #00AE0B;
        font-size: 22px;
        color: #242424;
        background: none;
    }

    textarea{
        height: 120px;
        border: 1px solid #00AE0B;
        border-radius: 8px;
        font-size: 22px;
        color: #242424;
        background: none;
        padding: 5px;
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
`;

export const Bottom = styled.div`
    width: 86%;
    display: flex;
    justify-content: space-between;
    font-size: 22px;
    margin: 40px 0 60px 0;

    button{
        border: none;
        background: none;
        font-size: 22px;
        color:#2800D1;
        font-weight: bold;
        position: relative;
        bottom: 4px;
    }
    
    span{
        color: #00AE0B;
        font-weight: bold;
        position: relative;
        bottom: 4px;
        margin-left: 3px;
        cursor: pointer;
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

