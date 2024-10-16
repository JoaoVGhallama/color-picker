import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: stretch;

  .react-colorful {
    height: 510px;
    width: 1000px;
    background: #121212;
    border-radius: 0 12px 12px 0;
  }

  .react-colorful__saturation {
    border-radius: 0 12px 0 0;
    margin-bottom: 10px;
  }
`;

export const ColorInput = styled.div`
  padding: 80px 60px;
  background: #100D0D;
  border-radius: 15px 0 0 15px;
  display: flex;
`;

export const InputUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  list-style: none;
  gap: 2rem;

  li h2 {
    font-weight: lighter;
    font-size: 22px;
  }

  li input {
    padding: 12px 20px;
    background: transparent;
    border-radius: 6px;
    border: 1px solid #BBBBBB;
  }
`;

export const ButtonTheme = styled.button`
  padding: 12px 20px;
  background: #E96B00;
  border-radius: 6px;
  border: none;
`;
