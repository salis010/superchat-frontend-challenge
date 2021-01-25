import styled from "../../styles/styled"

export const PageWrapper = styled.div`
    margin-left: 4rem;
`

export const FieldWrapper = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    width: 35rem;
    margin-bottom: 2rem;
`

export const H2 = styled.h2`
    margin-top: 4rem;
    color: ${(props) => props.theme.colors.text};
`

export const P = styled.p`
    font-size: 1.4rem;
    font-weight: 600;
    margin: 0;
    color: ${(props) => props.color};
`
