import { shade } from 'polished';
import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  flex-wrap: wrap;
  width: 100%;

  > a {
    color: ${colors.secondary};
    display: block;
    margin-top: 1em;
    text-decoration: none;
    transition: color 0.2s;
    font-size: 1.2em;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, `${colors.secondary}`)};
    }
  }
`;
