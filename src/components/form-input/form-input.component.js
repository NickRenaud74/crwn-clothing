import React from 'react';
import { FormInputContainer, GroupContainer, LabelContainer } from './form-input.styles';

function FormInput({handleChange, label, ...props}) {
    return (
        <GroupContainer>
            <FormInputContainer onChange={handleChange} {...props} />
            {
                label ? 
                <LabelContainer className={props.value.length ? 'shrink' : ''}>
                    {label}
                </LabelContainer>
                : null
            }
        </GroupContainer>
    )
};

export default FormInput;