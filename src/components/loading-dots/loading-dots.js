import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

// const BounceAnimation = keyframes`
//     0% { width: 0; height: 0 }
//     50% { width: 10px; height: 10px }
//     100% { width: 0; height: 0 }
// `;
const BounceAnimation = keyframes`
    0% { padding: 0 }
    50% { padding: 5px }
    100% { padding: 0 }
`;
const LoaderWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    background-color: red;
    height: 40px;
    width: 100px;
    align-items: center;
    justify-content: center;
    margin: 0;
`;
const DotWrapper = styled.div`
    // background-color: yellow;
    height: 40px;
    width: 20px;
    margin: 0px 2px;
    position: relative;
`;
const Dot = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    background-color: black;
    border-radius: 50%;
    width: 0px;
    height: 0px;
    /* Animation */
    animation: ${BounceAnimation} 1s linear infinite;
    animation-delay: ${props => props.delay};
`;

class LoadingDots extends Component {
    render() {
        return (
        <div style={{display: 'inline-block'}}>
        <LoaderWrapper>
            <DotWrapper>
                <Dot delay="0s" />
            </DotWrapper>
            <DotWrapper>
                <Dot delay=".1s" />
            </DotWrapper>
            <DotWrapper>
                <Dot delay=".2s" />
            </DotWrapper>
        </LoaderWrapper>
        </div>
        )
    }
}

export default LoadingDots;