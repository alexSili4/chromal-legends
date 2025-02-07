import GeneralContainer from '@/components/General/GeneralContainer';
import { FC } from 'react';
import SectionTitle from '@MainPageComponents/SectionTitle';
import { Container, Section } from './FAQSection.styled';
import FAQList from '@MainPageComponents/FAQList';
import { faq } from '@/constants';

const FAQSection: FC = () => {
  return (
    <Section>
      <Container>
        <SectionTitle text='Питання та відповіді' isDark />
        <GeneralContainer>
          <FAQList faq={faq} maxItems={5} />
        </GeneralContainer>
      </Container>
    </Section>
  );
};

export default FAQSection;
