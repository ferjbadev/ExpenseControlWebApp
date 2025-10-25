import styled from "styled-components";

export default function Input({ type, placeholder, value, onChange, name, required, min, step }) {
    return (
        <StyledInput
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            name={name}
            required={required}
            min={min}
            step={step}
        />
    );
}

const StyledInput = styled.input`
    width: 100%;
    padding: 12px 16px;
    border: 2px solid ${props => props.theme.bg4};
    border-radius: 8px;
    font-size: 16px;
    background-color: ${props => props.theme.bg3};
    color: ${props => props.theme.text};
    transition: all 0.3s ease;

    &:focus {
        outline: none;
        border-color: #00F34A;
        box-shadow: 0 0 0 3px rgba(0, 243, 74, 0.1);
    }

    &::placeholder {
        color: ${props => props.theme.colorSubtitle};
    }
`;
