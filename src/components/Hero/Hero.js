import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello, I'm<br />
        Tanishq maheshwari
      </SectionTitle>
      <SectionText>
        Web Developer | Graphic Designer | Deep Learning
      </SectionText>
      <Button onClick={() => window.open("https://www.linkedin.com/in/tanishq-maheshwari-5605b71ab/", "_blank")}>Contact Me :)</Button>
    </LeftSection>
  </Section>
);

export default Hero;
