import React from 'react'
import { SiCplusplus } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { styled } from 'styled-components';
import Card from './Card';
import { Slide } from 'react-awesome-reveal';

const Services = () => {
  return (
    <Container id = "service">
        <Slide direction='down'>
            <h4>My <span className="green">skills</span></h4>
            <h1>What I Do</h1>
        </Slide>
        <Cards>
            <Slide direction='left'>
                <Card Icon = {SiCplusplus} title = {"DSA"} disc = {``} />
            </Slide>
            <Slide direction='up'>
                <Card Icon = {FaReact} title = {"Web Development"} disc = {``} />
            </Slide>
            <Slide direction='right'>
                <Card Icon = {FaPython} title = {"Machine Learning"} disc = {``} />
            </Slide>    
        </Cards>
    </Container>
  )
}

export default Services

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 3rem 0;
    @media (max-width: 840px){
        width: 90%;
    }

    h1 {
        padding-top: 1rem;
    }
`
const Cards = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    margin-top: 4rem;
    gap: 1rem;
`