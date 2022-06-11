//Form, SearchInpt, SearchBtn
import styled from "styled-components";

export const Form = styled.form`
position: fixed;
top: 0;
left: 0;
height: 8vh;
width: 100vw;
display: flex;
align-items: center;
background-color: rgb(31, 34, 41);
`;

export const SearchInpt = styled.input`
height: 50%;
width: 25%;
margin-right: 7.5%;
margin-left: 30.5%;
padding-left: 1vw;
background-color: #080a0d;
color: white;
border: 1px solid rgb(232, 230, 227);
border-radius: 6px;
&:hover {
    background-color: rgb(31, 34, 41);
 }
&:focus {
    background-color: rgb(31, 34, 41);
    box-shadow: 0 0 15px #ffffff1c;
}
`
    
export const SearchBtn = styled.button`
height: 60%;
width: 7%;
padding: 0;
border-radius: 6px;
border: 1px solid white;
background-color: #080a0d;
color: white;
letter-spacing: 0.35vw;
font-size: 1vw;
display: flex;
justify-content: center;
align-items: center;
&:hover {
    background-color: rgb(31, 34, 41);
 }
&:active {
    background-color: #080a0d;
    box-shadow: 0 0 15px #ffffff1c;
}
`
export const DivResults = styled.div`
margin-top: 10vh;
`