// Div, Name, Img, Url,
import styled from 'styled-components';


export const Div = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-left: 2vw;
    padding: 0.5vh 0.5vw;
    border-top: 1px solid #e6e6e6;
    height: 10vh;
    width: 40vw;
`

export const Name = styled.h1`
width: 30%;
cursor: pointer;
`
    
export const Img = styled.img`
height: 80%;
border-radius: 100%;
`

export const Url = styled.a`
text-align: right;
width: 50%;
color: rgb(105, 187, 255);

&:visited {
    color: rgb(44, 83, 116);
}
`