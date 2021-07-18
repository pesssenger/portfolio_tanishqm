import React from 'react';
import { DiFirebase, DiReact, DiNodejsSmall, DiMongodb, DiMysql } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      These are the technologies that I've used as a Web Developer.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            ReactJs and NextJs
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <div style={{ display: "flex" }}>
          <DiNodejsSmall size="3rem" />
          <DiFirebase size="3rem" />
        </div>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node/Express and firebase
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <div style={{ display: "flex" }}>
          <DiMongodb size="3rem" />
          <DiMysql size="3rem" />
        </div>
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            Experience with <br />
            MongoDB and MySQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section >
);

export default Technologies;
