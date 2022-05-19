import styled from 'styled-components';
import { Filter } from 'components';

const Collections: React.FC<any> = (props: any) => {
  return (
    <Container>
      <Filter />
      <Content>
        Collections
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: block;
  padding: var(--padding);
`

const Content = styled.div`
  display: flex;
`
export default Collections;