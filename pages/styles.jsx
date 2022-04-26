import styled from "styled-components"

export const Container = styled.main `
  max-width: 1120px;
  margin: 0 auto;
  padding: 1.5rem 1rem;
`;

export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: var(--green);
  color: var(--background);

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  border: none;

  &:hover {
    filter: brightness(0.9)
  }
`;