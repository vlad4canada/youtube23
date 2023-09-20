/*
function App() {

  return (
    <div>
      Hello 
    </div>
  )
}

export default App
*/

// import React from 'react'
// import './app.css'
import styled from "styled-components"
import Hero from "./components/Hero"
import Contact from "./components/Contact"
import Works from "./components/Works"
import Who from "./components/Who"

let Container;
Container = styled.div`
  height: 100vh;
  background-color: rebeccapurple;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar{
    display: none;
  }
  color: white;
  background: url("./img/bg.webp");
`;

function App() {
  return (
    <Container>

      <Hero/>
      <Who/>
      <Works/>
      <Contact/>

    </Container>
  )
}

export default App
