import React from 'react';
import Input from '../HOCS/Input';
import MessageBox from '../HOCS/MessageBox';
import Button from '../HOCS/Button';
import FlexBox from '../HOCS/FlexBox';
import {NavLink} from 'react-router-dom';
import * as yup from 'yup';
import {useFormik} from 'formik';

const Register = () => {
    const minPasswordChars = 10
    let validationSchema = yup.object().shape({
        login: yup.string()
            .required('Обязательное поле'),
        email: yup.string()
            .email('Некорректный e-mail')
            .required('Обязательное поле'),
        password: yup.string()
            .required('Обязательное поле')
            .min(minPasswordChars, `Минимально ${minPasswordChars} символов`),
        passwordCheck: yup.string()
            .required('Обязательное поле')
            .oneOf([yup.ref('password'), null], 'Пароли не совпадают')
    });
    // ------------ FORMIK -----------------------------------------
    const formik = useFormik({
        initialValues: {
            login: '',
            email: '',
            password: '',
            passwordCheck: ''
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
    const onRegister = () => {
        if (formik.errors.login || formik.errors.email || formik.errors.password || formik.errors.passwordCheck) {
            setErrorShow(true)
            console.log(formik.errors)
        } else {
            console.log(formik.values.login, formik.values.email, formik.values.password)
        }
    }
    return <div className="register-wrapper">
        <div className="container">
            <h2>Регистрация</h2>
            <Input large
                   iconLeft="person"
                   id="login"
                   name="login"
                   label="логин"
                   value={formik.values.login}
                   onChange={formik.handleChange}
            />
            {errorShow && formik.errors.login && <MessageBox danger icon="warning" >{formik.errors.login}</MessageBox>}
            <Input large
                   iconLeft="mail"
                   id="email"
                   name="email"
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
            <Input large
                   iconLeft="password"
                   id="passwordCheck"
                   name="passwordCheck"
                   type="password"
                   label="пароль еще раз"
                   value={formik.values.passwordCheck}
                   onChange={formik.handleChange}
            />
            {errorShow && formik.errors.passwordCheck && <MessageBox danger icon="warning" >{formik.errors.passwordCheck}</MessageBox>}
            <Button onClick={onRegister} outline fullWidth size="lg" iconLeft="assignment_turned_in">Зарегистрироваться</Button>
            <FlexBox alignment="c-c">
                Уже зарегистрированы?&nbsp;<NavLink className="link" to={'/login'}>Войти</NavLink>
            </FlexBox>
        </div>
    </div>
};

export default Register;
