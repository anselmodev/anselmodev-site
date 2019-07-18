import css from 'styled-jsx/css';

const logoStrokeStyle = css`
    .logo-stroke{ width: 438px; position: absolute; top: 40px; left: 48px; z-index: 3; }
    .color-stroke { fill: none; stroke: #000; stroke-width: 2px; }
`;

const logoShapeStyle = css`
    .logo-shape{ width: 438px; position: absolute; top: 40px; left: 48px; z-index: 2; }
    .color-shape1 { fill: #202527; }
    .color-shape2 { fill: #aeb9ca; }
`;

const logoImageStyle = css`
    .logo-image{ position: absolute; top: 0; left: 0; z-index: 1; }
`;

// HELPERS
const lineDashedStyle = css`
    .border-dark-helper { outline: 1px dashed rgba(0, 0, 0, 0.4) }
    .border-red-helper { outline: 1px dashed rgba(255, 0, 0, 0.4) }
`;

const helperStyle = css`
    .absolute-position{ position: absolute; top: 0; left: 0; }
    .svg-dim { width: 489px; height: 318px; }
`;

// ############### ANIMATION LOGO ################
const animationStyle = css`
    /* Initial values */
    .imageFade{ opacity: 0; }
    .box-line { width: 489px; height: 318px; position: absolute; overflow: hidden; z-index: 4; }

    /* keyframes */
    @keyframes showFromTop { to { height: 318px; }; }
    @keyframes showFromLeft { to { width: 489px; }; }
    @keyframes fadeIn { to { opacity: 1; }; }
    @keyframes fadeOut { to { opacity: 0; }; }

    /* box */
    .box-line-from-top { animation-name: showFromTop; height: 0px; }
    .box-line-from-left { animation-name: showFromLeft; width: 0px; }
    .box-line-fade-in { animation-name: fadeIn; opacity: 0; }
    .box-line-fade-out { animation-name: fadeOut; opacity: 1; }

    /* durations  */
    .anim-duration05 { animation-duration: 0.5s; animation-fill-mode: forwards; }
    .anim-duration1 { animation-duration: 1s; animation-fill-mode: forwards; }
    .anim-duration15 { animation-duration: 1.5s; animation-fill-mode: forwards; }

    /* A delays stages */
    .anim-stage1 { animation-delay: 0.2s; }
    .anim-stage2 { animation-delay: 0.4s; }
    .anim-stage3 { animation-delay: 0.6s; }
    .anim-stage4 { animation-delay: 0.8s; }
    .anim-stage5 { animation-delay: 1s; }
    .anim-stage6 { animation-delay: 1.2s; }
    .anim-stage7 { animation-delay: 1.4s; }
    .anim-stage8 { animation-delay: 1.6s; }
    .anim-stage9 { animation-delay: 1.8s; }
    .anim-stage10 { animation-delay: 2s; }
    .anim-stage11 { animation-delay: 2.2s; }

    /* D delays stages */
    .anim-stage12 { animation-delay: 2.4s; }
    .anim-stage13 { animation-delay: 2.6s; }
    .anim-stage14 { animation-delay: 2.8s; }
    .anim-stage15 { animation-delay: 3s; }

    /* Shapes delays stages */
    .anim-stage16 { animation-delay: 3.5s; }
    .anim-stage17 { animation-delay: 4s; }

    /* Strokes delays stage */
    .anim-stage18{ animation-delay: 4.6s; }

    /* FadeOut lines */
    .lines-fade-out { animation-delay: 4.8s; }

    /* FadeOut shapes */
    .shapes-fade-out { animation-delay: 4.9s; }

    /* Image FadeIn delays stage */
    .anim-stage19{ animation-delay: 5.1s; }

    /* FadeOut strokes */
    .stroke-fade-out { animation-delay: 4.3s; }

    /* Controls */
    .anim-pause { animation-play-state: paused; }
    .anim-play { animation-play-state: running ;}

`;

export { logoStrokeStyle, lineDashedStyle, helperStyle, logoImageStyle, logoShapeStyle, animationStyle };


export default css`
    /* main canvas logo */
    .canvas-logo {transform:translateZ(0); transform-origin: top left; width: 489px; height: 318px; background-color: transparent; position: relative; overflow: hidden; display: inline-block; }

    /* hide logo */
    .hide-logo{ display: none; }
    
    /* .draw-lines{ opacity: .5 } */
    .draw-ln { opacity: .5 }
    .draw-sp { opacity: .7 }

    /* transparent logo */
    .transp-logo{ opacity: 0; }
    .opac01-logo{ opacity: 0.1; }
    .opac03-logo{ opacity: 0.3; }
    .opac05-logo{ opacity: 0.5; }
    .opac07-logo{ opacity: 0.7; }
    .opac09-logo{ opacity: 0.9; }

    /* sizes */
    .xs-logo { transform: scale(0.2); }
    .sm-logo { transform: scale(0.3); }
    .md-logo { transform: scale(0.5) }
    .lg-logo { transform: scale(0.7) }
    .xl-logo { transform: scale(1) }
`;
