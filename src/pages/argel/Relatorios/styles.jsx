import  styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 100%;
  color: #fff;
`;

export const Paciente = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f5f5f5;
  color: #000;
  margin: 10px;
  cursor: pointer;

  &:hover {
    background-color: #ccc;
  }
`;