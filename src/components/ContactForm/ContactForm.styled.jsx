import styled from '@emotion/styled';

export const LabelName = styled.label`
display: block;
margin-right: 20px;
margin-bottom: 10px;
font-weight: 700;
`;

export const Search = styled.input`
display: block;
margin-top: 10px;
`;

export const BtnContact = styled.button`
  display: inline-flex;
  margin: 0 4px;
  padding: 8px 24px;
  border: 0;
  border-radius: 2px;
  color: #ffffff;
  font-size: 14px;
  font-family: inherit;
  background-color: #2196f3;
  font-weight: 700;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  &:hover,
  &:focus {
      background-color: #ffffff;
  color: #1976d2;
  border: 2px solid #1976d2;
  font-weight: 700;
  }
`;

export const FormSt = styled.form`
border: 2px dotted grey;
  width: 300px;
  height: 150px;
  padding: 10px;

`;