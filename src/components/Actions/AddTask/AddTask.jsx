import React from 'react';
import TextArea from '../../HOCS/TextArea';
import Button from '../../HOCS/Button';
import {useFormik} from 'formik';
import * as yup from 'yup';
import MessageBox from '../../HOCS/MessageBox';
import CircularProgress from '../../HOCS/CircularProgress';

const AddTask = () => {
    const textMaxChars = 50
    let validationSchema = yup.object().shape({
        newTask: yup.string().required('Обязательное поле').max(textMaxChars, `Максимальное количество символов - ${textMaxChars}`),
    });
    // ------------ FORMIK -----------------------------------------
    const formik = useFormik({
        initialValues: {
            newTask: ''
        },
        validateOnMount: true,
        validationSchema: validationSchema,
    })
    // ------------ / FORMIK ---------------------------------------
    // ------------ LOCAL STATE ------------------------------------
    const [showAddContactBtn, setShowAddContactBtn] = React.useState(true)
    const [errorShow, setErrorShow] = React.useState(false)
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
                <Button disabled={formik.errors.newTask} iconLeft="save" size="lg" primary fullWidth>Поехали</Button>
            </div>
        </div>
    </section>
};

export default AddTask;
