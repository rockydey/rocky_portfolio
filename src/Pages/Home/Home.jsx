import React from 'react';
import About from './About';
import Contact from './Contact';
import Header from './Header';
import MyProjects from './MyProjects';
import MySkills from './MySkills';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <About></About>
            <MySkills></MySkills>
            <MyProjects></MyProjects>
            <Contact></Contact>
        </div>
    );
};

export default Home;