import Head from 'next/head';
import { Fragment, useState, useEffect } from 'react';
import { indexDef } from '../styles/logo-styles';

import { AnimatedLogo, } from '../components/common/Logo';

export default () => {
    // Logo animation state
    const [ animationLogo, setAnimationLogo ] = useState({start: false, restart: false});

    useEffect(() => {
        setTimeout(() => {
            setAnimationLogo({...animationLogo, restart: false})
        }, 100);
    }, [animationLogo.restart]);

    return (
        <Fragment>
            <Head>
                <title>Front-end Developer - Anselmo Dev Studio</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="theme-color" content="#2e2f34" />
            </Head>

            <div className='container'>

                <AnimatedLogo animate={animationLogo.start} restart={animationLogo.restart} />

                <br />
                <button onClick={() => { !animationLogo.start ? setAnimationLogo({...animationLogo, start: true}) : setAnimationLogo({...animationLogo, start: false}) }}>
                    Play / Pause Animation
                </button>
                <br />
                <br />
                <button onClick={() => { !animationLogo.restart ? setAnimationLogo({...animationLogo, restart: true}) : setAnimationLogo({...animationLogo, restart: false}) }}>
                    Restart Animation
                </button>

                <style jsx>{indexDef}</style>
            </div>
        </Fragment>
    )
}