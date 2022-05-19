import styled from 'styled-components';

const Card: React.FC<any> = (props: any) => {
  return (
    <Container>
      <Content>
        This is a Card
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: block;
  box-sizing: border-box;
  width: 20%;
  padding: 10px;
`

const Content = styled.div`
  display: block;
  border: 1px solid var(--shade-7);
  border-radius: var(--border-radius);
  height: 300px;
`

export default Card;