import styled from '@emotion/styled';

export const ContactItem = styled.li`
font-size: 15px;
display: inline-flex;
align-items: center;
margin: 20px 20px;
`;
export const ContactInfo = styled.p`
font-weight: 700;
color: #4b0082;
`;

export const BtnDelete = styled.button`
  display: inline-flex;
  margin: 0 4px;
  padding: 8px 24px;
  border: 0;
  border-radius: 100%;
  color: #ffffff;
  cursor: pointer;
  font-size: 14px;
  font-family: inherit;
  background-color: #2196f3;
  font-weight: 700;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
&:hover,
&:focus {
color: red;
background-color: #ffffff;
border: 2px solid#2196f3;
text-align: center;
}
`;

export const SpanIcon = styled.span`
    display: dispay-flex;
    margin-right: 5px;
`;