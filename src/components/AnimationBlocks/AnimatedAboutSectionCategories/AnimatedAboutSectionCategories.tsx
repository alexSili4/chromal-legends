import { FC } from 'react';
import { IProps } from './AnimatedAboutSectionCategories.types';

const AnimatedAboutSectionCategories: FC<IProps> = ({
  categories,
  activeCategory,
}) => {
  return (
    <List>
      {categories.map((category, index) => {
        const isActiveCategory = category === activeCategory;

        const animate = {
          backgroundColor: isActiveCategory ? '#eee' : '#eee0',
        };

        return (
          <ListItem key={index}>
            <Container initial={false} animate={animate}>
              <Input type='radio' checked={isActiveCategory} />
              <RadioBtn>
                {/* icon */}
                <Title>{category}</Title>
              </RadioBtn>
            </Container>
          </ListItem>
        );
      })}
    </List>
  );
};

export default AnimatedAboutSectionCategories;
