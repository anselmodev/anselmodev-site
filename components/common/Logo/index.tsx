import React, { Fragment } from 'react';
import canvasLogo, { helperStyle, logoStrokeStyle, logoShapeStyle, lineDashedStyle, logoImageStyle, animationStyle } from './styles';

type PropsComponent = {
    animate?: boolean; 
    restart?: boolean; 
    guides?: boolean; 
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'; 
    display?: boolean; 
    transparent?: boolean;
}
type PropsStyle = {
    style?: object;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'; 
    strokes?: boolean;
    shapes?: boolean;
    opacity?: '01' | '03' | '05' | '07' | '09';
}

// Logo Strokes
const LogoStrokes = (props: PropsStyle) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 439.47 221.29" className="logo-stroke" style={props.style}> <g><path className="color-stroke" d="M48.11 257.72l103.37-218H229l72.71 154.56-29.41 63h-11l-70.67-149.21-71.46 149.65z" transform="translate(-46.53 -38.66)"/><path id="D_stroke" data-name="D stroke" className="color-stroke" d="M283.86 257.3l29.83-62.2s45.73-.22 64.84-.61 40.54-19 41.48-47.14c-.54-24.76-19.69-43.79-46-43.79-3.63.08-101.51 0-101.51 0l-31.32-63.84s116.2-.13 136.1 0c58.33.73 106.13 49.91 107.72 104.89-.38 71.81-58.18 113.5-111.45 113.92-9.02 1.41-89.69-1.23-89.69-1.23z" transform="translate(-46.53 -38.66)"/></g> <style jsx>{logoStrokeStyle}</style> </svg>
);

// Logo Shape A
const LogoShapeA = (props: PropsStyle) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 436.89 219.29" className='logo-shape' style={props.style}> <g> <path className="color-shape1" d="M261.28 257.3h11l29.41-63-6-12.85q-18.39-.17-36.78-.8 10.69-3.15 21.39-6.23 6-.14 12-.13l-20.9-44.36-68.14 4.81 40.51 85.58q20.86-3.1 41.7-6.31c-13 4.31-26.2 7.9-39.46 11z" transform="translate(-48.11 -39.66)"/> <path className="color-shape1" d="M175.28 136.71l1.76-.19 13.59-28.45 12.15 25.66c19.66-2.17 39.29-4.47 58.81-7.31l7.62-1.15L229 39.72h-77.52L76.15 198.59q12 .36 24 .87-7.4 2-14.81 4-6.59 1.76-13.18 3.46l-24.05 50.8h71.06L177 136.59z" transform="translate(-48.11 -39.66)"/> </g> <style jsx>{logoShapeStyle}</style> </svg>
);

// Logo Shape D
const LogoShapeD = (props: PropsStyle) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 436.89 219.29" className='logo-shape' style={props.style}> <path className="color-shape2" d="M484.33 157.07q.63-6.07.67-12.46a105.32 105.32 0 0 0-19.2-56.86q-18.71.44-37.42.43 7.31-2.36 14.63-4.66 7.88-2.47 15.76-4.86c-19.79-23.1-49-38.54-81.49-38.94-19.9-.13-136.1 0-136.1 0l17.75 36.22c9.12-3 18.33-5.78 27.58-8.31q14 .15 28 .12-27.24 5.18-54.43 10.56l12.37 25.24s97.88.09 101.51 0c26.35 0 45.5 19 46 43.79-.94 28.18-22.38 46.76-41.48 47.15s-64.84.61-64.84.61l-29.83 62.2s80.67 2.64 89.69 1.23h2.48l1.9-.51q27-7.5 53.6-16.61a9.69 9.69 0 0 0 1.23-.53c.6-.38 1.2-.76 1.79-1.15a14.31 14.31 0 0 0 4.95-9.86c3.17-1.2 6.34-2.42 9.49-3.69 5.47-2.21 8.93-8.51 7.76-15.17-.77-4.4-3.67-8.75-7.44-10.48l4.57-1q10.06-2.26 20.08-4.78a113.85 113.85 0 0 0 10.16-35.76q-9.18 1.4-18.37 2.69 8.85-2 17.68-4.32z" transform="translate(-48.11 -39.66)"/> <style jsx>{logoShapeStyle}</style> </svg>
);

// A & D Shapes
const LogoShapes = (props: PropsStyle) => (
    <div className={`canvas-logo ${props.size ? `${props.size}-logo` : ''} ${props.opacity ? `opac${props.opacity}-logo` : ''}`}>
        {
            props.shapes && 
            <Fragment>
                <LogoShapeA /> 
                <LogoShapeD />
            </Fragment>
        }
        {props.strokes && <LogoStrokes />}
        <style jsx>{canvasLogo}</style>
    </div>
);

// Logo Image
const LogoImage = (props: PropsStyle) => (
    <div className={`canvas-logo ${props.size ? `${props.size}-logo` : ''} ${props.opacity ? `opac${props.opacity}-logo` : ''}`}>
        <img src="/static/images/logo-final.png" alt="Logo AD Studio" title="AD Studio" className="logo-image" style={props.style} />
        <style jsx>{logoImageStyle}</style>
        <style jsx>{canvasLogo}</style>
    </div>
);

// ################## LINES ##################
// Draw (A)
const A_left_1a = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 489 318" className="A-left-1a svg-dim"> <path d="M114.49 109.16c-1.89 7-4.28 13.77-6.76 20.51l-1.91 5-2 5c-1.31 3.34-2.76 6.62-4.28 9.87-3.06 6.5-6.58 12.81-9.49 19.37S84.6 182.23 82.26 189c-1.19 3.39-2.32 6.81-3.57 10.17s-2.53 6.73-3.82 10.07c-2.61 6.69-5.19 13.39-8 20s-5.83 13.12-9 19.59S51.53 261.74 48 268l-.46-.19c2-6.95 4.32-13.75 6.73-20.52s5-13.48 7.67-20.13 5.66-13.19 8.6-19.74c1.47-3.28 2.94-6.55 4.48-9.8s3.17-6.45 4.75-9.68c3.2-6.44 6.21-13 8.83-19.64s4.66-13.61 7.14-20.35c1.24-3.37 2.57-6.71 4-10l2.16-4.93 2.26-4.9c3-6.5 6.21-12.95 9.87-19.2z"/> <path fill="none" d="M0 0h489v318H0z"/> </svg>
);
const A_left_1b = () => (
    <Fragment>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 489 318" className="A-left-1b svg-dim"> <path d="M49.32 259.42c3.51-9.45 7.42-18.71 11.4-27.94l3-6.91 3.09-6.87c2-4.59 4.2-9.13 6.41-13.65 4.43-9 9.24-17.87 13.55-27s8.34-18.24 12.23-27.51c1.95-4.63 3.85-9.29 5.84-13.9s4-9.21 6.07-13.8c4.08-9.19 8.14-18.38 12.39-27.48s8.63-18.15 13.13-27.14 9.08-17.95 13.88-26.8l.36.16c-3.62 9.4-7.44 18.71-11.37 28s-8 18.45-12.12 27.61-8.52 18.21-12.86 27.27c-2.16 4.54-4.33 9.07-6.56 13.57s-4.52 9-6.78 13.48c-4.52 9-9 18-13 27.19s-7.72 18.57-11.7 27.8q-3 6.92-6.21 13.73L66.82 226l-3.29 6.78c-4.43 9-9 18-13.85 26.81z" data-name="A - left 1"/> <path fill="none" d="M0 0h489v318H0z"/> </svg>
        <style jsx>{helperStyle}</style>
    </Fragment>
);

const A_top = () => (
    <Fragment>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 489 318" className="A-top svg-dim"> <path d="M238.5 38.7c-6.58.76-13.17 1.1-19.75 1.35l-4.94.15-4.93.07c-3.3.06-6.59 0-9.88-.11-6.58-.25-13.17-.9-19.75-1s-13.17.1-19.75.45c-3.29.16-6.58.38-9.88.51s-6.58.21-9.87.27c-6.58.14-13.17.31-19.75.25s-13.17-.23-19.75-.55-13.17-.74-19.75-1.39v-.4c6.58-.65 13.17-1.08 19.75-1.38s13.17-.46 19.75-.55 13.17.11 19.75.25c3.29.06 6.58.14 9.87.27s6.59.35 9.88.51c6.58.35 13.17.6 19.75.45s13.17-.76 19.75-1c3.29-.12 6.58-.17 9.88-.11l4.93.07 4.94.15c6.58.25 13.17.59 19.75 1.35z"/> <path fill="none" d="M0 0h489v318H0z"/> </svg>
        <style jsx>{helperStyle}</style>
    </Fragment>
);

const A_right_2a = () => (
    <Fragment>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 489 318" className="A-right-2a svg-dim"> <path d="M295.49 173.21c-3.56-5-6.74-10.16-9.85-15.39-1.54-2.62-3.07-5.24-4.54-7.9s-2.9-5.34-4.23-8.07c-2.66-5.47-5-11.11-7.77-16.51s-5.84-10.66-9.06-15.82c-1.6-2.59-3.23-5.16-4.79-7.77s-3.07-5.24-4.58-7.88c-3-5.27-6-10.54-8.88-15.91-5.62-10.78-11-21.68-15.64-33l.36-.19c6.91 10.07 13.09 20.54 19 31.14 3 5.31 5.7 10.73 8.46 16.14 1.37 2.71 2.76 5.42 4.08 8.15s2.59 5.51 3.88 8.26c2.56 5.52 5.27 11 8.27 16.24s6.45 10.32 9.57 15.54q2.34 3.92 4.43 8c1.43 2.69 2.79 5.4 4.14 8.13 2.67 5.46 5.26 11 7.48 16.67z" data-name="A - right 2"/> <path fill="none" d="M0 0h489v318H0z"/> </svg>
        <style jsx>{helperStyle}</style>
    </Fragment>
);
const A_right_2b = () => (
    <Fragment>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 489 318" className="A-right-2b svg-dim"> <path d="M227.63 38.43c4.2 7.22 8.18 14.54 12 21.93s7.65 14.8 11.2 22.33l5.19 11.38c1.72 3.79 3.44 7.59 5.25 11.34 3.61 7.51 7.48 14.88 11.43 22.22s7.86 14.7 11.65 22.12S292 164.56 295.68 172c7.31 15 14.39 30.06 20.95 45.39l-.26.14c-8.27-14.5-16-29.25-23.55-44.11-3.75-7.44-7.34-15-11-22.46s-7.15-15.05-10.6-22.63-7-15.12-10.82-22.53c-1.9-3.71-3.88-7.37-5.88-11l-5.93-11c-3.86-7.38-7.49-14.89-11-22.42s-7-15.13-10.21-22.82z"/> <path fill="none" d="M0 0h489v318H0z"/> </svg>
        <style jsx>{helperStyle}</style>
    </Fragment>
);

const A_bottom_2 = () => (
    <Fragment>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 489 318" className="A-bottom-2 svg-dim"> <path d="M307.68 186.58c-2.54 6.22-5.18 12.4-7.77 18.59l-8 18.51c-2.68 6.15-5 12.45-8.14 18.41-1.54 3-3.1 6-4.78 8.88s-3.41 5.81-5.35 8.61l-.36-.16c.9-3.29 2-6.48 3.15-9.64s2.43-6.27 3.72-9.37c2.56-6.21 5.87-12.08 8.86-18.09l9-18c3.08-6 6.11-12 9.23-17.91z" data-name="A - bottom 2"/> <path fill="none" d="M0 0h489v318H0z"/> </svg>
        <style jsx>{helperStyle}</style>
    </Fragment>
);

const A_right_1a = () => (
    <Fragment>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 489 318" className="A-right-1a svg-dim"> <path d="M193.69 102.42c3 5.34 5.6 10.84 8.12 16.37 1.25 2.77 2.48 5.55 3.65 8.35s2.31 5.62 3.33 8.48c2.06 5.72 3.75 11.59 5.93 17.26s4.65 11.22 7.29 16.71c1.31 2.75 2.65 5.48 3.91 8.24s2.49 5.55 3.71 8.33c2.42 5.57 4.86 11.14 7.1 16.78 4.41 11.33 8.56 22.75 12 34.48l-.38.16c-5.77-10.77-10.78-21.85-15.54-33-2.35-5.61-4.49-11.29-6.65-17-1.07-2.84-2.15-5.68-3.17-8.55s-2-5.75-3-8.63c-2-5.76-4.05-11.47-6.46-17s-5.29-11-7.82-16.49c-1.27-2.76-2.44-5.57-3.55-8.4s-2.18-5.67-3.22-8.52c-2.06-5.72-4-11.47-5.63-17.38z" data-name="A - right 1"/> <path fill="none" d="M0 0h489v318H0z"/> </svg>
        <style jsx>{helperStyle}</style>
    </Fragment>
);
const A_right_1b = () => (
    <Fragment>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 489 318" className="A-right-1b svg-dim"> <g data-name="A - right 1"> <path d="M197.68 119.41c3.48 5.51 6.58 11.2 9.59 16.92l2.23 4.31 2.16 4.35c1.45 2.89 2.8 5.82 4.09 8.79 2.57 5.94 4.77 12.06 7.46 17.94s5.67 11.62 8.79 17.28c1.55 2.84 3.14 5.66 4.65 8.53s3 5.74 4.43 8.63c2.92 5.77 5.86 11.53 8.6 17.39s5.37 11.77 7.88 17.74 4.93 12 7.13 18.09l-.36.18c-3.38-5.56-6.56-11.2-9.62-16.91s-6-11.47-8.87-17.26-5.49-11.71-8.15-17.61c-1.34-2.94-2.67-5.89-3.94-8.87s-2.48-6-3.73-9c-2.48-6-5-11.92-8-17.69s-6.27-11.34-9.29-17.06c-1.5-2.87-2.94-5.76-4.29-8.71l-2-4.4-2-4.44c-2.57-5.94-5.06-11.92-7.16-18.08z"/> <path d="M275.5 257.5a21.74 21.74 0 0 1-4 .78 38.29 38.29 0 0 1-4 .22 33.51 33.51 0 0 1-4-.22 20.94 20.94 0 0 1-4-.78 20.94 20.94 0 0 1 4-.78 33.51 33.51 0 0 1 4-.22 38.29 38.29 0 0 1 4 .22 21.74 21.74 0 0 1 4 .78z"/> </g> <path fill="none" d="M0 0h489v318H0z"/> </svg>
        <style jsx>{helperStyle}</style>
    </Fragment>
);

const A_left_2a = () => (
    <Fragment>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 489 318" className="A-left-2a svg-dim"> <path d="M195.68 107.6c-1.83 4.94-4 9.69-6.32 14.39-1.15 2.35-2.32 4.68-3.55 7s-2.48 4.59-3.85 6.82c-2.72 4.46-5.79 8.73-8.39 13.26s-4.94 9.2-7.11 14c-1.1 2.38-2.16 4.77-3.3 7.12s-2.32 4.69-3.5 7c-2.37 4.65-4.73 9.31-7.28 13.86a300.22 300.22 0 0 1-16.7 26.58l-.36-.2a300.16 300.16 0 0 1 13.3-28.43c2.45-4.62 5.09-9.12 7.72-13.64 1.32-2.25 2.63-4.51 4-6.73s2.8-4.42 4.2-6.63c2.83-4.41 5.51-8.89 7.89-13.54s4.33-9.53 6.61-14.24c1.13-2.35 2.36-4.66 3.65-6.93s2.6-4.52 3.95-6.76c2.72-4.47 5.51-8.89 8.68-13.11z" data-name="A - left 2"/> <path fill="none" d="M0 0h489v318H0z"/> </svg>
        <style jsx>{helperStyle}</style>
    </Fragment>
);
const A_left_2b = () => (
    <Fragment>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 489 318" className="A-left-2b svg-dim"> <path d="M119.32 260.41c2.39-6.74 5.17-13.31 8-19.83l2.18-4.88 2.25-4.84q2.24-4.85 4.72-9.58c3.31-6.31 7-12.44 10.17-18.81s6.07-12.88 8.84-19.44c1.39-3.29 2.74-6.59 4.17-9.85s2.89-6.51 4.37-9.74c3-6.48 5.9-13 9-19.36s6.38-12.73 9.75-19 6.82-12.52 10.49-18.66l.36.18c-2.5 6.69-5.19 13.3-8 19.84s-5.75 13-8.75 19.49-6.27 12.79-9.47 19.14c-1.6 3.19-3.21 6.36-4.88 9.51s-3.39 6.27-5.08 9.4c-3.4 6.27-6.71 12.58-9.66 19.06s-5.47 13.17-8.33 19.69q-2.15 4.89-4.53 9.67l-2.38 4.78-2.44 4.75c-3.31 6.31-6.7 12.58-10.47 18.67z" data-name="A - left 2"/> <path fill="none" d="M0 0h489v318H0z"/> </svg>
        <style jsx>{helperStyle}</style>
    </Fragment>
);

const A_bottom_1 = () => (
    <Fragment>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 489 318" className="A-bottom-1 svg-dim"> <path d="M128.5 259.5c-7 .83-14 1.26-21 1.55s-14 .45-21 .45-14-.15-21-.44-14-.73-21-1.56c7-.83 14-1.27 21-1.56s14-.45 21-.44 14 .15 21 .45 14 .72 21 1.55z" data-name="A - bottom 1"/> <path fill="none" d="M0 0h489v318H0z"/> </svg>
        <style jsx>{helperStyle}</style>
    </Fragment>
);

// Draw (D)
const D_left_1 = () => (
    <Fragment>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 489 318" className="D-left-1 svg-dim"> <path d="M402.57 115.31a20.79 20.79 0 0 1 7.76 4.47 24 24 0 0 1 3.15 3.3 27.08 27.08 0 0 1 2.56 3.79 31.74 31.74 0 0 1 3.24 8.55 34.42 34.42 0 0 1 .85 9c-.25 6-1.8 11.8-3.41 17.42-.43 1.4-.8 2.82-1.25 4.22l-.64 2.1-.17.53c-.07.2-.15.38-.22.55-.14.36-.31.69-.47 1a41.57 41.57 0 0 1-4.89 7.49l-1.47 1.7c-.5.56-1.05 1.07-1.57 1.61a40.06 40.06 0 0 1-3.36 3c-1.18.93-2.42 1.78-3.66 2.63s-2.57 1.57-3.89 2.28a61.6 61.6 0 0 1-16.86 6c-2.95.67-5.78 1.06-8.67 1.52s-5.76.87-8.65 1.25c-5.78.76-11.57 1.46-17.41 1.87l-.08-.4c5.6-1.74 11.25-3.18 16.91-4.57 2.83-.69 5.67-1.33 8.52-2s5.74-1.19 8.46-1.88 5.48-1.42 8.2-2.18l4-1.41c1.31-.52 2.59-1.11 3.89-1.66a55.09 55.09 0 0 0 14-9.34 29.22 29.22 0 0 0 5.3-6.63 10.28 10.28 0 0 0 .49-.93 3.46 3.46 0 0 0 .2-.45l.17-.51.68-2.06c.48-1.36.8-2.77 1.16-4.17a60.12 60.12 0 0 0 1.32-17.07 58.57 58.57 0 0 0-1-8.31 36.19 36.19 0 0 0-2.52-7.88 29.45 29.45 0 0 0-10.85-12.6z" data-name="D - left 2"/> <path fill="none" d="M0 0h489v318H0z"/> </svg>
        <style jsx>{helperStyle}</style>
    </Fragment>
);
const D_left_2 = () => (
    <Fragment>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 489 318" className="D-left-2 svg-dim"> <path d="M278.82 266.91l34.53-73.22.19-.4h.46l67.5-.89h-.1a36.45 36.45 0 0 0 7-1.71 44.08 44.08 0 0 0 6.63-2.93 39.5 39.5 0 0 0 11.21-9 41.5 41.5 0 0 0 7.3-12.39 54.71 54.71 0 0 0 3.19-14.15 63 63 0 0 0-.14-14.53 38.57 38.57 0 0 0-4.46-13.55 33.46 33.46 0 0 0-9.37-10.58 45.32 45.32 0 0 0-6.12-3.71 54.44 54.44 0 0 0-6.68-2.68 62.26 62.26 0 0 0-14.21-2.69c-1.2-.08-2.4-.13-3.59-.13l-3.68.06-7.46.12-29.82.44c-9.94.16-19.88.24-29.82.3s-19.89.16-29.83.15h-1.25l-.5-1.07L258 79l-5.88-12.68-5.81-12.71-11.57-25.5c-3.81-8.51-7.67-17-11.42-25.52l.36-.18c4.25 8.3 8.39 16.65 12.58 25l12.41 25L254.86 65 261 77.55l12.22 25.14-1.72-1.08c9.94-.21 19.87-.34 29.81-.45s19.88-.25 29.81-.29l29.82-.16h11.22c1.31 0 2.58.09 3.86.19a65.07 65.07 0 0 1 15 3 55.76 55.76 0 0 1 7.11 3 47.4 47.4 0 0 1 6.57 4.09 37.1 37.1 0 0 1 10.1 11.61 41.87 41.87 0 0 1 4.68 14.66 65.66 65.66 0 0 1 0 15.22 57.16 57.16 0 0 1-3.5 14.81 44 44 0 0 1-7.88 13.09 42.24 42.24 0 0 1-12 9.46 43.47 43.47 0 0 1-14.52 4.77h-.1l-67.5.11.64-.41-35.47 72.78z" data-name="D - left 2"/> <path fill="none" d="M0 0h489v318H0z"/> </svg>
        <style jsx>{helperStyle}</style>
    </Fragment>
);
const D_bottom = () => (
    <Fragment>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 489 318" className="D-bottom svg-dim"> <path d="M283.55 257.3c11-.76 22-1.1 33.05-1.35l8.26-.15 8.26-.07c5.5-.06 11 0 16.52.11l16.53.55 8.27.29 8.27.17c2.76 0 5.51.06 8.27 0a54.85 54.85 0 0 0 8.08-1.11 99.33 99.33 0 0 0 15.7-4.65 111.72 111.72 0 0 0 14.72-7 108.42 108.42 0 0 0 13.48-9 98.07 98.07 0 0 0 21.53-23.95c1.55-2.21 2.81-4.59 4.16-6.94.7-1.15 1.24-2.39 1.84-3.6l1.79-3.64 1.57-3.75.78-1.88a18.1 18.1 0 0 0 .72-1.9l1.35-3.84c.46-1.28.92-2.56 1.26-3.88a177.46 177.46 0 0 0 6.34-32.2h.4a137 137 0 0 1-3.7 33c-.28 1.37-.69 2.71-1.09 4l-1.19 4c-.19.67-.41 1.33-.67 2l-.74 2-1.47 3.94-1.73 3.83c-.6 1.27-1.13 2.58-1.84 3.79-1.35 2.47-2.62 5-4.19 7.32-.76 1.19-1.49 2.39-2.31 3.53l-2.52 3.39c-.81 1.16-1.75 2.21-2.65 3.29l-1.38 1.6a19 19 0 0 1-1.42 1.56 102.16 102.16 0 0 1-12.54 11.26 98.09 98.09 0 0 1-29.77 15.14 122.35 122.35 0 0 1-16.19 3.92 66.56 66.56 0 0 1-8.29 1h-8.27l-8.26.17-8.26.29-16.52.55c-5.51.12-11 .17-16.54.11l-8.26-.07-8.27-.15c-11-.25-22.06-.59-33.08-1.35z" data-name="D - bottom"/> <path fill="none" d="M0 0h489v318H0z"/> </svg>
        <style jsx>{helperStyle}</style>
    </Fragment>
);
const D_top = () => (
    <Fragment>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 489 318" className="D-top svg-dim"> <path d="M240.61 38.3c29.05-1.26 58.12-1.76 87.19-1.93 14.53-.06 29.06.11 43.58.25l5.45.05h4.78l.77.08a101.38 101.38 0 0 1 10.91 1.85 138.25 138.25 0 0 1 21 6.46A136.32 136.32 0 0 1 434 54.79a116.23 116.23 0 0 1 17.72 12.84 104.91 104.91 0 0 1 7.86 7.64c.63.67 1.28 1.32 1.89 2l1.77 2.11c1.16 1.41 2.39 2.79 3.42 4.31a91.62 91.62 0 0 1 11 19.1c5.89 13.59 8.15 28.47 8.29 43.1.12 3.69 0 7.3-.1 10.93s-.17 7.26-.28 10.89c-.21 7.27-.47 14.53-.86 21.79h-.4c-.39-7.26-.65-14.52-.86-21.79-.11-3.63-.21-7.26-.28-10.89s-.12-7.28-.32-10.85l-.25-5.38c-.13-1.79-.38-3.57-.56-5.36l-.27-2.67c-.05-.44-.09-.89-.15-1.34l-.23-1.32-.91-5.29c-.24-1.78-.79-3.48-1.17-5.23l-.61-2.61-.31-1.3c-.11-.43-.26-.86-.39-1.28-.54-1.71-1.07-3.41-1.58-5.12a25.29 25.29 0 0 0-.89-2.53l-1-2.5-.94-2.51c-.33-.82-.73-1.62-1.09-2.44-.77-1.61-1.44-3.28-2.28-4.86l-2.58-4.71c-.89-1.55-1.92-3-2.87-4.55s-2.05-2.94-3.12-4.39l-1.61-2.16c-.57-.7-1.17-1.37-1.75-2a90.31 90.31 0 0 0-7.5-7.78c-10.66-9.78-23.68-16.74-37.28-21.42a147.12 147.12 0 0 0-20.88-5.38c-3.53-.62-7.09-1.17-10.61-1.46H376.71l-5.45.05c-14.52.14-29 .31-43.55.25-29-.17-58.06-.67-87.1-1.93z" data-name="D - top"/> <path fill="none" d="M0 0h489v318H0z"/> </svg>
        <style jsx>{helperStyle}</style>
    </Fragment>
);

const AnimatedLogo = (props: PropsComponent) => {

    const {animate, restart, guides, size, display, transparent} = props;
    const playAnimation = !animate ? 'anim-pause' : '';

    return (
        <div className={`canvas-logo ${size ? `${size}-logo` : ''}`}>
            {
                !restart && 
                <div className={`canvas-logo ${guides ? 'border-red-helper' : ''} ${size ? `${size}-logo` : ''} ${display === false ? `hide-logo` : ''} ${transparent ? `transp-logo` : ''} `}>
                    {/* fadeIn image */}
                    <div className={`${playAnimation} test box-line imageFade anim-stage19 box-line-fade-in shapes-fade-in anim-duration15`} id="logo-image" style={{zIndex: 1, height: 318}}>
                        <LogoImage />
                    </div>

                    {/* shapes */}
                    <div className={`${playAnimation} box-line-fade-out shapes-fade-out anim-duration15`}>
                        <div className={`${playAnimation} draw-sp box-line anim-stage16 box-line-from-top anim-duration15`} id="logo-shape-A" style={{zIndex: 3}}>
                            <LogoShapeA />
                        </div>
                        <div className={`${playAnimation} draw-sp box-line anim-stage17 box-line-from-top anim-duration15`} id="logo-shape-D" style={{zIndex: 3}}>
                            <LogoShapeD />
                        </div>
                    </div>

                    {/* 'fadeOut' strokes */}
                    <div className={`${playAnimation} box-line-fade-out stroke-fade-out anim-duration15`}>
                        <div className={`${playAnimation} box-line box-line-from-top anim-duration15 anim-stage18`} id="logo-stroke" style={{zIndex: 4}}>
                            <LogoStrokes />
                        </div>
                    </div>

                    {/* draw lines */}
                    <div className={`${playAnimation} draw-ln box-line-fade-out lines-fade-out anim-duration15`}>
                        <div className={`draw-ln ${playAnimation} box-line box-line-from-top anim-duration05 anim-stage1`}>
                            <A_left_1a />
                        </div>
                        <div className={`draw-ln ${playAnimation} box-line box-line-from-top anim-duration05 anim-stage2`}>
                            <A_left_1b />
                        </div>
                        <div className={`draw-ln ${playAnimation} box-line box-line-from-left anim-duration05 anim-stage3`}>
                            <A_top />
                        </div>
                        <div className={`draw-ln ${playAnimation} box-line box-line-from-top anim-duration15 anim-stage4`}>
                            <A_right_2a />
                        </div>
                        <div className={`draw-ln ${playAnimation} box-line box-line-from-top anim-duration15 anim-stage5`}>
                            <A_right_2b />
                        </div>
                        <div className={`draw-ln ${playAnimation} box-line box-line-from-top anim-duration15 anim-stage6`}>
                            <A_bottom_2 />
                        </div>
                        <div className={`draw-ln ${playAnimation} box-line box-line-from-top anim-duration15 anim-stage7`}>
                            <A_right_1a />
                        </div>
                        <div className={`draw-ln ${playAnimation} box-line box-line-from-top anim-duration15 anim-stage8`}>
                            <A_right_1b />
                        </div>
                        <div className={`draw-ln ${playAnimation} box-line box-line-from-top anim-duration15 anim-stage9`}>
                            <A_left_2a />
                        </div>
                        <div className={`draw-ln ${playAnimation} box-line box-line-from-top anim-duration15 anim-stage10`}>
                            <A_left_2b />
                        </div>
                        <div className={`draw-ln ${playAnimation} box-line box-line-from-left anim-duration15 anim-stage11`}>
                            <A_bottom_1 />
                        </div>
                        <div className={`draw-ln ${playAnimation} box-line box-line-from-top anim-duration15 anim-stage12`}>
                            <D_left_1 />
                        </div>
                        <div className={`draw-ln ${playAnimation} box-line box-line-from-top anim-duration15 anim-stage13`}>
                            <D_left_2 />
                        </div>
                        <div className={`draw-ln ${playAnimation} box-line box-line-from-top anim-duration15 anim-stage14`}>
                            <D_bottom />
                        </div>
                        <div className={`draw-ln ${playAnimation} box-line box-line-from-top anim-duration15 anim-stage15`}>
                            <D_top />
                        </div>
                    </div>

                    
                </div>
            }
            {/* Styles */}
            <style jsx>{canvasLogo}</style>
            <style jsx>{animationStyle}</style>
            <style jsx>{lineDashedStyle}</style>
        </div>
    );
};

export { AnimatedLogo, LogoImage, LogoShapes };