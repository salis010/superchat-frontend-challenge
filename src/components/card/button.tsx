import styled from "../../styles/styled"

export const Button = styled.button`
    font-size: ${(props) => props.fontSize};
    font-weight: 800;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    color: ${(props) => props.color};
    background-color: ${(props) => props.backgroundColor};
    border: 3px solid ${(props) => props.color};
    border-radius: ${(props) => props.radius};
    outline: none;
    cursor: pointer;
`
