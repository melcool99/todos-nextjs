import styled from 'styled-components'

export const Button = styled.button`  
  border-radius: 10px;
  border: 2px solid #e09614;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  cursor:pointer;
  color:green;
    &:hover {
      color:#e09614;
    };
`;
//

export const Input = styled.input`
border-radius: 10px;
border: 1px solid #e09614;
color:green;
padding: 0.5rem;
min-width:250px;
  &:active{
    color:blue;
    border: 1px solid green
  };
`;

export const CheckboxInput = styled.input`
position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

//
export const TodoContainer = styled.div`
border-radius: 10px;
border: 1px solid #e09614;
color:#5d8f70;
margin: 0 0 1em;
padding: 0.5rem;
box-shadow: 2px 1px 0px ##e09614;
`;
export const AddTodoContainer = styled.form`
display:flex;
cursor:pointer;
align-items:center;
justify-content:center;
padding:20px;
color:#e09614;
border-radius: 10px;
border: 1px solid ;
margin: 0 0 1em;
padding: 0.5rem;
box-shadow: 2px 1px 0px ;
`;


//
export const AppWrapper =styled.div`
cursor:pointer;
align-items:center;
justify-content:center;
display:flex;
box-size:border-box;
align-items:center;
font-style:bold;
font-size: 18px;
color: #e09614;
  h1{
    font-weight:bold;
  };
`;