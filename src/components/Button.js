import styled from 'styled-components';

export const ButtonContainer = styled.button`
text-transform: capitalized;
font-size : 1.4rem;
background : transparent;
border:0;
&:hover{
    background:var(--lightBlue);
    color  : var(--mainBlue);
}
`;