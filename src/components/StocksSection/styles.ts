import styled, { css } from 'styled-components';
import colors from '../../styles/colors';

interface VariationProps {
  variation: number | undefined;
}

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0.25em;

  /* justify-content: space-around; */
`;

export const Currency = styled.div`
  display: flex;
  border-radius: 0.3rem;
  flex: 1;

  align-items: center;
  justify-content: space-evenly;
  padding: 0.2em;
  background: #3e3b47;
  cursor: pointer;
  margin: 0.5em;

  /* & + div {
    margin-top: 16px;
  } */
  p {
    padding: 1em;
  }
  span {
    overflow: hidden;
    white-space: nowrap;
    padding: 0.2em;
    margin: 0 0.2em;
    /* font-weight: 500px */
  }

  div {
    display: flex;
    flex: 1;
    align-items: center;
    padding: 0.1em;
    /* border-radius: 10px; */
    /* margin-left: 24px; */

    strong {
      color: #f4ede8;
      font-weight: 500;
    }
    span {
      color: #fff;
    }
  }
`;

export const Variation = styled.span<VariationProps>`
  padding: 0.2em;
  font-size: 1.2em;

  background-color: ${colors.gray};

  ${(props) =>
    typeof props.variation !== 'undefined' &&
    props.variation < 0 &&
    css`
      background-color: ${colors.red};
    `}

  ${(props) =>
    typeof props.variation !== 'undefined' &&
    props.variation > 0 &&
    css`
      background-color: ${colors.green};
    `}
      border-radius: 0.25rem;
`;
