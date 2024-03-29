import styled from "styled-components"
import Label from "../../ui/inputs/Label";
import Input from "../../ui/inputs/Input";

const Container = styled.div`
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const ErrorMessage = styled.p`
    font-size: 0.8rem;
    color: #ff0005;
`



const InputGroup = ({
    label,
    type,
    name,
    value,
    placeholder,
    error,
    onChange,
    onFocus,
    onBlur,
}) => {
    return (
        <Container>
            <Label htmlFor={name}>{label}</Label>
            <Input
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                error={error}
            />
            {error && <ErrorMessage>{error}</ErrorMessage>}
        </Container>
    )
} 

export default InputGroup;