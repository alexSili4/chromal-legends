import { FC } from 'react';
import About from '@/icons/about/about.svg?react';
import Teams from '@/icons/about/teams.svg?react';
import Artifacts from '@/icons/about/artifacts.svg?react';
import {
  Label,
  CustomRadioBtn,
  Input,
  Title,
  Image,
} from './AboutSectionCategory.styled';
import { IProps } from './AboutSectionCategory.types';
import activeCategoryBg from '@/images/about/active-category-bg.png';

const AboutSectionCategory: FC<IProps> = ({
  category,
  onChange,
  isActiveCategory,
  isAboutCategory,
  isTeamsCategory,
  isArtifactsCategory,
}) => {
  return (
    <Label>
      <Input
        type='radio'
        name='category'
        value={category}
        onChange={onChange}
        checked={isActiveCategory}
      />
      <CustomRadioBtn>
        <Image src={activeCategoryBg} alt='Фонове зображення активного табу' />
        {isAboutCategory && <About />}
        {isTeamsCategory && <Teams />}
        {isArtifactsCategory && <Artifacts />}
        <Title>{category}</Title>
      </CustomRadioBtn>
    </Label>
  );
};

export default AboutSectionCategory;
