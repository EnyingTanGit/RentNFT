import styled from 'styled-components';

const Filter: React.FC<any> = (props: any) => {

  return (
    <Container>
      This is Filter
    </Container>
  )
}

const Container = styled.div`
  box-sizing: border-box;
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export default Filter;