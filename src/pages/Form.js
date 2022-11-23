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

const spanStyle = {
    display: 'inline-block',
    color: 'red',
};
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
                <ReactForm.Group className="mb-3" controlId="formBasicFullName">
                    <FloatingLabel controlId="floatingFullName" label="*Full Name">
                        <ReactForm.Control type="text" placeholder="Enter full name" {...register('fullName')} />
                        <ReactForm.Text sm={5} className="text-danger">{errors.fullName?.message}</ReactForm.Text>
                    </FloatingLabel>
                </ReactForm.Group>
                <ReactForm.Group className="mb-3" controlId="formBasicEmail">
                    <FloatingLabel controlId="floatingEmail" label="*Email">
                        <ReactForm.Control type="email" placeholder="Enter email" {...register('email')} />
                        <ReactForm.Text sm={5} className="text-danger">{errors.email?.message}</ReactForm.Text>
                    </FloatingLabel>
                </ReactForm.Group>
                <ReactForm.Group className="mb-3" controlId="formBasicAge">
                    <FloatingLabel controlId="floatingAge" label="*Age">
                        <ReactForm.Control type="number" placeholder="Enter age" {...register('age')} />
                        <ReactForm.Text sm={5} className="text-danger">{errors.age?.message}</ReactForm.Text>
                    </FloatingLabel>
                </ReactForm.Group>
                <ReactForm.Group className="mb-3" controlId="formBasicPassword">
                    <FloatingLabel controlId="floatingPassword" label="*Password">
                        <ReactForm.Control type="password" placeholder="Enter password" {...register('password')} />
                        <ReactForm.Text sm={5} className="text-danger">{errors.password?.message}</ReactForm.Text>
                    </FloatingLabel>
                </ReactForm.Group>
                <ReactForm.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <FloatingLabel controlId="floatingConfirmPassword" label="*ConfirmPassword">
                        <ReactForm.Control type="password" placeholder="Enter password again" {...register('confirmPassword')} />
                        <ReactForm.Text sm={5} className="text-danger">{errors.confirmPassword?.message}</ReactForm.Text>
                    </FloatingLabel>
                </ReactForm.Group>

                <Button variant="primary" type="submit"> Submit </Button>
            </ReactForm>
        </article>
    );
};
