import React from 'react';
import Input from '../HOCS/Input';
import * as yup from 'yup';
import {useFormik} from 'formik';
import MessageBox from '../HOCS/MessageBox';
import Button from '../HOCS/Button';
import {NavLink} from 'react-router-dom';
import FlexBox from '../HOCS/FlexBox';

const Login = () => {
    const minPasswordChars = 10
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
        validateOnMount: true,
        validationSchema: validationSchema,
    })
    // ------------ / FORMIK ---------------------------------------
    // ------------ LOCAL STATE ------------------------------------
    const [errorShow, setErrorShow] = React.useState(false)
    // ------------ / LOCAL STATE ----------------------------------
    // ------------ HOOKS ------------------------------------------
    // ------------ / HOOKS ----------------------------------------
    // ------------ FUNCTIONS --------------------------------------
    const onLogin = () => {
        if (formik.errors.email || formik.errors.password) {
            setErrorShow(true)
            console.log(formik.errors)
        } else {
            console.log(formik.values.email, formik.values.password)
        }
    }

    // ------------ / FUNCTIONS ------------------------------------

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
