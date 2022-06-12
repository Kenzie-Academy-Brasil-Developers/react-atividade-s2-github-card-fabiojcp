import styled from "styled-components";

export const DivMain = styled.div`
width: 100%;
height: 20vh;
margin-left: -15vw;
border: 1px solid #e6e6e6;
border-radius: 6px;
margin-bottom: 4vh;
height: auto;
padding: 2vw;
display: flex;
flex-direction: column;
`

export const Text = styled.p`
font-size: 1.5vw;
margin: 1vh 0;
`

export const Clone = styled.button`
padding: 2vh 1vw;
border-radius: 6px;
margin: 2% 0 0 0;
width: 30vh;
color: #e6e6e6;
border: 1px solid #e6e6e6;
background-color: #080a0d;
font-size: 1vw;
&:hover {
    background-color:rgb(31,34,41);
}
&:active{
    background-color: #080a0d;
}
`

export const Name = styled.p`
font-size: 2vw;
`