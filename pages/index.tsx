import Head from "next/head";
import  { Container } from '../styles/indexStyles';
import { AnimatedLogo, } from '../components/common/Logo';
// import  linkedinLogo from '../static/svg/linkedin.svg';

import { useState, useEffect } from "react";

export default () => {
  // Logo animation state
  const [ animationLogo, setAnimationLogo ] = useState({start: true, restart: false});

  useEffect(() => {
    setTimeout(() => {
        setAnimationLogo({...animationLogo, restart: false})
    }, 100);
  }, [animationLogo.restart]);


  return (
    <Container>
      <Head>
        <title>Front-end Developer - Anselmo Dev Studio</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="theme-color" content="#2e2f34" />
      </Head>
      <div className="home-content">
        <AnimatedLogo size="lg" animate={animationLogo.start} restart={animationLogo.restart} />
        
        <p className="name">Anselmo Dev Studio</p>

        <p className="contact">Contato: fale@anselmodev.com</p>

        <p className="social-title">Nas Redes:</p>

        <p className="social-access">
          <a className="social-buttons linkedin" href="https://www.linkedin.com/in/anselmo-lima-dev/" title="No Linkedin" target="_blank">
            <img src="../static/svg/white-linkedin.svg" alt="" title="No Linkedin" width="40px" />
          </a>
          <a className="social-buttons instagram" href="https://www.instagram.com/anselmo.dev" title="No Instagram" target="_blank">
            <img src="../static/svg/white-instagram.svg" alt="" title="No Instagram" width="40px" />
          </a>
          <a className="social-buttons github" href="https://github.com/anselmodev" target="_blank" title="No Github">
            <img src="../static/svg/white-github.svg" alt="" title="No Github" width="40px" />
          </a>
        </p>

        <p className="alert">New Site It's Comming...</p>
      </div>
    </Container>
  );
};
