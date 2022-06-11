// Div, Name, Img, Url,
import styled from 'styled-components';


export const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-left: 2vw;
    padding: 0.5vh 0.5vw;
    border-top: 1px solid #e6e6e6;
    width: 40vw;
    margin: 1vh 0 0 0;
    padding: 1vh 0 0 0;
`

export const Name = styled.h1`
width: 80%;
cursor: pointer;
`
    
export const Img = styled.img`
height: 80%;
border-radius: 100%;
`

export const Url = styled.a`
width: 80%;
color: rgb(105, 187, 255);
&:visited {
    color: rgb(44, 83, 116);
}
`
export const UrlText = styled.a`
width: 80%;
color: rgb(105, 187, 255);
&:visited {
    color: rgb(44, 83, 116);
}
`

export const Clone = styled.button`
position: absolute;
height: 5%;
border-radius: 6px;
margin-left: 32%;
color: #e6e6e6;
border: 1px solid #e6e6e6;
background-color: #080a0d;
&:hover {
    background-color:rgb(31,34,41);
}
&:active{
    background-color: #080a0d;
}
`