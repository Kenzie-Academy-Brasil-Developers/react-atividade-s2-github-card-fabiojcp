import styled from "styled-components"

const BtnBack = styled.button`
position: fixed;
padding: 2vh 1vw;
border-radius: 6px;
top: 4vh;
left: 2vw;
color: #e6e6e6;
border: 1px solid #e6e6e6;
background-color: #080a0d;
font-size: 2vw;
&:hover {
    background-color:rgb(31,34,41);
}
&:active{
    background-color: #080a0d;
}
`

export default BtnBack