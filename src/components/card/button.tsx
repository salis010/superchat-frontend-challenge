import styled from "../../styles/styled"

type ButtonProps = {
    fontSize: string
    width: string
    height: string
    color: string
    backgroundColor: string
    radius: string
}

export const Button = styled.button<ButtonProps>`
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
