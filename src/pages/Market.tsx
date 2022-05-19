import styled from 'styled-components';
import { Filter, Card } from 'components';

const Market: React.FC<any> = (props: any) => {
  return (
    <Container>
      <Filter />
      <Content>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: block;
  padding: var(--padding);
  box-sizing: border-box;
`

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;

`

export default Market;