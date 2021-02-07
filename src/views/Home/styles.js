import styled from 'styled-components'


export const Container = styled.div`
    width: 100%;
    

    #filters
    {
        width: 100%;
        display:flex;
        margin-top: 20px;
        margin-bottom: 20px;
        justify-content: space-around;

        button{
            background: none;
            border: none;
        }
    }

    hr {
        opacity: 0.5;
    }

    #taskCards{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin-bottom: 60px;

        button {
            background: none;
            border: none;
        }
    }

    
`
