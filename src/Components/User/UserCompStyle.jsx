//DivMain, Img, Name, DivText, Text, LinkText
import styled from "styled-components";

export const DivMain = styled.div`
`
export const DivText = styled.div`
position: absolute;
left: 34vw;
top: 3vh;
`

export const Img = styled.img`
border-radius: 100%;
position: absolute;
left: 18vw;
top: 5vh;
width: 15vw;
`
export const Name = styled.p`
font-size: 2vw;
margin-top: 5vh;
margin-bottom: 2vh;
`


export const Text = styled.p`
font-size: 1.5vw;
margin: 1vh 0;
`

export const LinkText = styled.a`
font-size: 1.5vw;
color: rgb(105, 187, 255);
&:visited {
    color: rgb(44, 83, 116);
}
`