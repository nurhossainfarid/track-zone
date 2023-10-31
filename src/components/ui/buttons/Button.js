import styled from 'styled-components'

const buttonSize = {
    sm: '0.25rem 0.5rem',
    md: '0.5rem 1.25rem',
    lg: '1rem 2rem'
}

const fontSize = {
    sm: '0.8rem',
    md: '1rem',
    lg: '1.2rem'
}

const Button = styled.button`
    border: none;
    outline: none;
    background: ${props => props.$primary ? "#BF4F74" : '#ffffff'};
    color: ${props => props.$primary ? "#ffffff" : "#BF4F74"};
    font-size: ${props => fontSize[props.font] ?? '1rem'};
    margin: 1em;
    padding: ${(props) => buttonSize[props.size] ?? '0.5rem 1rem'};
    border: 2px solid #BF4F74;
    border-radius: 3px;
`

export default Button;