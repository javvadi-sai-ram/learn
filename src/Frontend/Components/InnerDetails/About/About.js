import React from 'react';
import styled from 'styled-components';
import { DetailHeader } from '../../DetailsHeader/StyledComponent';
import DetailsHeader from '../../DetailsHeader/detailsHeader';

const ProfileContainer = styled.div`
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
    font-family: Arial, sans-serif;
`;

const Section = styled.section`
    margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
    font-size: 1.5em;
    color: whitesmoke;
    border-bottom: 2px solid #eee;
    padding-bottom: 10px;
`;

const Paragraph = styled.p`
    font-size: 1.1em;
    line-height: 1.6;
    color: whitesmoke;
`;

const List = styled.ul`
    list-style-type: none;
    padding: 0;
`;

const ListItem = styled.li`
    font-size: 1.1em;
    color: #444;
    color: whitesmoke;
    margin-bottom: 10px;
`;

const About = () => {
    return (
        <ProfileContainer>
            <DetailsHeader/>
            <Section>
                <SectionTitle>About Me</SectionTitle>
                <Paragraph>
                    I am a dedicated React.js Developer with nearly 3 years of experience specializing in creating dynamic, responsive web applications. My expertise includes building and optimizing user interfaces using React.js, along with leveraging tools like Redux for state management.
                </Paragraph>
                <Paragraph>
                    I have a solid understanding of modern JavaScript practices and am skilled in implementing component-based architectures to deliver efficient and scalable solutions. My experience encompasses working with various frontend technologies and best practices to ensure high-quality, maintainable code.
                </Paragraph>
                <Paragraph>
                    Passionate about continuous learning, I stay updated with the latest advancements in React and frontend development to bring innovative solutions to every project I work on.
                </Paragraph>
            </Section>
            <Section>
                <SectionTitle>Skills</SectionTitle>
                <List>
                    <ListItem>React.js</ListItem>
                    <ListItem>Redux</ListItem>
                    <ListItem>JavaScript ES6+</ListItem>
                    <ListItem>HTML5 & CSS3</ListItem>
                    <ListItem>Responsive Design</ListItem>
                </List>
            </Section>
            <Section>
                <SectionTitle>Projects</SectionTitle>
                <List>
                    <ListItem>Dynamic Dashboard Application</ListItem>
                    <ListItem>Real-time Chat App</ListItem>
                    <ListItem>Interactive Data Visualization Tool</ListItem>
                </List>
            </Section>
            
        </ProfileContainer>
    );
};

export default About;
