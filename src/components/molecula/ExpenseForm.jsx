import { useState, useEffect } from "react";
import styled from "styled-components";
import Input from "../atomos/Input";
import Button from "../atomos/Button";
import { useExpenseStore } from "../../store/ExpenseStore";

export default function ExpenseForm({ expense, onClose, onSubmit }) {
    const { categories, addExpense, updateExpense } = useExpenseStore();
    const [formData, setFormData] = useState({
        description: "",
        amount: "",
        category: "",
        date: new Date().toISOString().split("T")[0],
        notes: "",
    });

    useEffect(() => {
        if (expense) {
            setFormData(expense);
        }
    }, [expense]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (expense) {
            updateExpense(expense.id, formData);
        } else {
            addExpense(formData);
        }
        
        if (onSubmit) onSubmit();
        if (onClose) onClose();
    };

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label>Description *</Label>
                <Input
                    type="text"
                    name="description"
                    placeholder="e.g., Grocery shopping"
                    value={formData.description}
                    onChange={handleChange}
                    required
                />
            </FormGroup>

            <FormGroup>
                <Label>Amount *</Label>
                <Input
                    type="number"
                    name="amount"
                    placeholder="0.00"
                    value={formData.amount}
                    onChange={handleChange}
                    required
                    min="0"
                    step="0.01"
                />
            </FormGroup>

            <FormGroup>
                <Label>Category *</Label>
                <Select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select a category</option>
                    {categories.map((cat) => (
                        <option key={cat.id} value={cat.name}>
                            {cat.icon} {cat.name}
                        </option>
                    ))}
                </Select>
            </FormGroup>

            <FormGroup>
                <Label>Date *</Label>
                <Input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                />
            </FormGroup>

            <FormGroup>
                <Label>Notes</Label>
                <TextArea
                    name="notes"
                    placeholder="Additional notes (optional)"
                    value={formData.notes}
                    onChange={handleChange}
                    rows="3"
                />
            </FormGroup>

            <ButtonGroup>
                <Button
                    titulo={expense ? "Update Expense" : "Add Expense"}
                    bgcolor="#00F34A"
                />
                {onClose && (
                    <CancelButton type="button" onClick={onClose}>
                        Cancel
                    </CancelButton>
                )}
            </ButtonGroup>
        </Form>
    );
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const Label = styled.label`
    font-size: 14px;
    font-weight: 600;
    color: ${props => props.theme.text};
`;

const Select = styled.select`
    width: 100%;
    padding: 12px 16px;
    border: 2px solid ${props => props.theme.bg4};
    border-radius: 8px;
    font-size: 16px;
    background-color: ${props => props.theme.bg3};
    color: ${props => props.theme.text};
    cursor: pointer;
    transition: all 0.3s ease;

    &:focus {
        outline: none;
        border-color: #00F34A;
        box-shadow: 0 0 0 3px rgba(0, 243, 74, 0.1);
    }
`;

const TextArea = styled.textarea`
    width: 100%;
    padding: 12px 16px;
    border: 2px solid ${props => props.theme.bg4};
    border-radius: 8px;
    font-size: 16px;
    background-color: ${props => props.theme.bg3};
    color: ${props => props.theme.text};
    font-family: inherit;
    resize: vertical;
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

const ButtonGroup = styled.div`
    display: flex;
    gap: 12px;
    margin-top: 8px;
`;

const CancelButton = styled.button`
    flex: 1;
    padding: 12px 24px;
    background-color: transparent;
    color: ${props => props.theme.text};
    border: 2px solid ${props => props.theme.bg4};
    border-radius: 50px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background-color: ${props => props.theme.bg4};
    }
`;
