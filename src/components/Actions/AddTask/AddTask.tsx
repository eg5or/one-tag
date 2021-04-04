import React from 'react';
import TextArea from '../../HOCS/TextArea';
import Button from '../../HOCS/Button';
import {useFormik} from 'formik';
import * as yup from 'yup';
import MessageBox from '../../HOCS/MessageBox';
import CircularProgress from '../../HOCS/CircularProgress';

const AddTask: React.FC = () => {
    // ------------ FUNCTIONS --------------------------------------
    const onAddTask = ():void => {
        console.log(formik.values.newTask)
    }
    // ------------ / FUNCTIONS ------------------------------------
    const textMaxChars: number = 50
    let validationSchema = yup.object().shape({
        newTask: yup.string().required('Обязательное поле').max(textMaxChars, `Максимальное количество символов - ${textMaxChars}`),
    });
    // ------------ FORMIK -----------------------------------------
    const formik = useFormik({
        initialValues: {
            newTask: ''
        },
        onSubmit: onAddTask,
        validateOnMount: true,
        validationSchema: validationSchema,
    })
    // ------------ / FORMIK ---------------------------------------
    // ------------ LOCAL STATE ------------------------------------
    // ------------ / LOCAL STATE ----------------------------------


    return <section id="add-task">
        <div className="container">
            <div className="main__title">
                <h4>Добавь таску</h4>
            </div>
            <div className="main__content">
                <div className="add-task__textarea">
                    <TextArea id="newTask"
                              name="newTask"
                              label="писать здесь"
                              rows="4"
                              onChange={formik.handleChange}
                              value={formik.values.newTask}
                              fullWidth
                    />
                    <CircularProgress color="secondary" value={formik.values.newTask.length} maxValue={textMaxChars} />
                </div>
                {formik.errors.newTask && <MessageBox icon="warning" danger>{formik.errors.newTask}</MessageBox>}
                <Button onClick={onAddTask} disabled={Boolean(formik.errors.newTask)} iconLeft="save" size="lg" primary fullWidth>Поехали</Button>
            </div>
        </div>
    </section>
};

export default AddTask;
