import styled from "styled-components"

export const Container = styled.main `
  max-width: 1120px;
  margin: 0 auto;
  padding: 1.5rem 1rem;
`;

export const Title = styled.h1 `
  text-align: center;
  color: var(--text-title);
`;

export const H2 = styled.h2 `
  text-align: center;
  color: var(--text-title);
  margin: 2rem;
`;

export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: var(--green);
  color: var(--background);

  font-size: 1rem;
  margin: 1rem;
  padding: 1rem;
  border-radius: 3px;
  border: none;

  &:hover {
    filter: brightness(0.9);
  };
`;

export const FormWrapper = styled.form `
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
`;

export const Input = styled.input `
  border: 0;
  border-radius: 6px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  
  &:first-child {
    margin-top: 1rem;
  }

  &:focus {
    outline-color: var(--green)
  }
`;

export const ErrorMessage = styled.span`

font-weight: 600;
color: var(--red);
margin-bottom: 1rem;
margin-left: 16px;
margin-top: 0.5rem;
`