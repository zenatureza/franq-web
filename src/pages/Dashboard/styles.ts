import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
`;

export const Section = styled.section`
  margin-bottom: 40px;

  > strong {
    font-size: 20px;
    line-height: 26px;
    border-bottom: 1px solid #3e3b47;
    display: block;
    padding-bottom: 16px;
    margin: 0.5em;
  }
  .flex-center {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;
