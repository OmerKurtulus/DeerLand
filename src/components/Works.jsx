import React from 'react';
import styled from 'styled-components'; // import styled

const data = [
  "Web Design",
  "Development",
  "Illustration",
  "Product Design",
  "Social Media"
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li`
  font-size: 100px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;

  ::after {
    content: "${(props)=>props.text}";
    position: absolute;
    top: 0;
    left: 0;
  }

  &:hover{
    ::after{
      color: white;
    }
  }

`;

const Right = styled.div`
  flex: 1;
`;

export const Works = () => {
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem key={item} text={item}>{item}</ListItem>
            ))}
          </List>
        </Left>
        <Right>
          {/* Add your project images here */}
        </Right>
      </Container>
    </Section>
  )
}
