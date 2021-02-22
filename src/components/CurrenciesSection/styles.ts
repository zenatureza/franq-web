import styled, { css } from 'styled-components';
import colors from '../../styles/colors';

interface VariationProps {
  variation: number | undefined;
}

export const Currency = styled.div`
  display: flex;
  align-items: center;
  background: #3e3b47;
  cursor: pointer;

  & + div {
    margin-top: 16px;
  }
  span {
    margin-left: auto;
    display: flex;
    align-items: center;
    color: #f4ede8;
  }
  div {
    flex: 1;
    display: flex;
    align-items: center;
    padding: 16px;
    border-radius: 10px;
    margin-left: 24px;

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
