// Dependencies
import React from 'react';
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
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Full Name" {...register('fullName')} /><span style={spanStyle}>{errors.fullName?.message}</span>
                <input type="text" placeholder="Email" {...register('email')} /><span style={spanStyle}>{errors.email?.message}</span>
                <input type="number" placeholder="Age" {...register('age')} /><span style={spanStyle}>{errors.age?.message}</span>
                <input type="password" placeholder="Password" {...register('password')} /><span style={spanStyle}>{errors.password?.message}</span>
                <input type="password" placeholder="Confirm Password" {...register('confirmPassword')} /><span style={spanStyle}>{errors.confirmPassword?.message}</span>
                <input type="submit" />
            </form>
        </div>
    );
};
