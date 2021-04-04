import React from 'react';
import Input from '../HOCS/Input';
import * as yup from 'yup';
import {useFormik} from 'formik';
import MessageBox from '../HOCS/MessageBox';
import Button from '../HOCS/Button';
import {NavLink} from 'react-router-dom';
import FlexBox from '../HOCS/FlexBox';

const Login: React.FC = () => {
    // ------------ FUNCTIONS --------------------------------------
    const onLogin = (): void => {
        if (formik.errors.email || formik.errors.password) {
            setErrorShow(true)
            console.log(formik.errors)
        } else {
            console.log(formik.values.email, formik.values.password)
        }
    }
    const onEnter = (e: React.KeyboardEvent<Element>) => {
        if (e.code === 'Enter') return onLogin()
    }
    // ------------ / FUNCTIONS ------------------------------------
    const minPasswordChars: number = 10
    let validationSchema = yup.object().shape({
        email: yup.string()
            .email('Некорректный e-mail')
            .required('Обязательное поле'),
        password: yup.string()
            .required('Обязательное поле')
            .min(minPasswordChars, `Минимально ${minPasswordChars} символов`),
    });
    // ------------ FORMIK -----------------------------------------
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: onLogin,
        validateOnMount: true,
        validationSchema: validationSchema,
    })
    // ------------ / FORMIK ---------------------------------------
    // ------------ LOCAL STATE ------------------------------------
    const [errorShow, setErrorShow] = React.useState(false)
    // ------------ / LOCAL STATE ----------------------------------
    // ------------ HOOKS ------------------------------------------
    // ------------ / HOOKS ----------------------------------------


    return <div className="login-wrapper">
        <div className="container">
            <h2>Вход</h2>
            <Input large
                   iconLeft="mail"
                   id="email"
                   name="email"
                   type="email"
                   label="e-mail"
                   value={formik.values.email}
                   onChange={formik.handleChange}
                   onKeyDown={onEnter}
            />
            {errorShow && formik.errors.email && <MessageBox danger icon="warning" >{formik.errors.email}</MessageBox>}
            <Input large
                   iconLeft="password"
                   id="password"
                   name="password"
                   type="password"
                   label="пароль"
                   value={formik.values.password}
                   onChange={formik.handleChange}
                   onKeyDown={onEnter}
            />
            {errorShow && formik.errors.password && <MessageBox danger icon="warning" >{formik.errors.password}</MessageBox>}
            <Button onClick={onLogin} outline fullWidth size="lg" iconLeft="login">Войти</Button>
            <FlexBox alignment="c-c">
                <NavLink className="link" to={'/register'}>Зарегистрироваться</NavLink>
            </FlexBox>
        </div>
    </div>
};

export default Login;
