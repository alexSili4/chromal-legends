import { FC } from 'react';
import { IProps } from './Input.types';
import { Container, Content, Desc, StyledInput, Title } from './Input.styled';

const Input: FC<IProps> = ({ settings, title, desc, type = 'text' }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Content>
        <StyledInput type={type} {...settings} />
        {desc && <Desc>{desc}</Desc>}
      </Content>
    </Container>
  );
};

export default Input;
