// Dependencies
import React from 'react';
import { Form as ReactForm, Button, FloatingLabel } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
    number as yupNumber,
    object as yupObject,
    string as yupString,
    ref as yupRef,
    ValidationError
} from 'yup';

// NOTE: Need module "react-hook-form"(for displaying) & "yup"(for validation) & "@hookform/resolvers"(integration between yup & react-hook-form)
const formLabel = [
    {
        registerName: 'fullName',
        label: '*Full Name',
        type: 'text',
        controlId: 'formBasicFullName',
        floatingControlId: 'floatingFullName',
        placeholder: 'Enter full name',
    },
    {
        registerName: 'email',
        label: '*Email',
        type: 'email',
        controlId: 'formBasicEmail',
        floatingControlId: 'floatingEmail',
        placeholder: 'Enter email',
    },
    {
        registerName: 'age',
        label: '*Age',
        type: 'number',
        controlId: 'formBasicAge',
        floatingControlId: 'floatingAge',
        placeholder: 'Enter age',
    },
    {
        registerName: 'password',
        label: '*Password',
        type: 'password',
        controlId: 'formBasicPassword',
        floatingControlId: 'floatingPassword',
        placeholder: 'Enter password',
    },
    {
        registerName: 'confirmPassword',
        label: '*ConfirmPassword',
        type: 'password',
        controlId: 'formBasicConfirmPassword',
        floatingControlId: 'floatingConfirmPassword',
        placeholder: 'Enter password again',
    }
];
const schema = yupObject().shape({
    fullName: yupString().required('必填'),
    email: yupString().required('必填').email('email格式錯誤'),
    age: yupNumber().transform((value) => (isNaN(value) ? undefined : value)).required('必填').positive().integer().min(18, '年齡必須>=18'),
    password: yupString().required('必填').min(4, '密碼最小為4個位元').max(20, '密碼最大為20個位元'),
    confirmPassword: yupString()
        .oneOf([yupRef('password'), null], '輸入的密碼與再次輸入的密碼不符')
        .required('必填'),
});

const onSubmit = (data) => { console.log(data); };

export const Form = () => {
    const { register, handleSubmit, formState: { errors, }, } = useForm({
        resolver: yupResolver(schema),
    });

    return (
        <article className="mx-5">
            <ReactForm onSubmit={handleSubmit(onSubmit)}>
                {formLabel.map(obj => {
                    const { registerName, label, type, controlId, floatingControlId, placeholder, } = obj;
                    return (
                        < ReactForm.Group key={registerName} className="mb-3" controlId={controlId} >
                            <FloatingLabel controlId={floatingControlId} label={label}>
                                <ReactForm.Control type={type} placeholder={placeholder} {...register(registerName)} />
                                <ReactForm.Text sm={5} className="text-danger">{errors[registerName]?.message}</ReactForm.Text>
                            </FloatingLabel>
                        </ReactForm.Group>
                    );
                })}
                <Button variant="primary" type="submit"> Submit </Button>
            </ReactForm>
        </article >
    );
};
