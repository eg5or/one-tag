import React from 'react';
import {useFormik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import {addTag, getAllTags} from '../../redux/tagsReducer';
import Tag from './Tag';

const TagsList = () => {
    const formik = useFormik({
        initialValues: {
            name: ''
        }
    })

    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(getAllTags())
    }, [])

    const {tags} = useSelector(({tags}) => tags)
    const tagsElements = tags.map(item => <Tag dispatch={dispatch} key={item.name} {...item}/>)
    const onAddTag = () => {
        dispatch(addTag(formik.values.name))
    }
    return (
        <div>
            <div>
                <input id="name"
                       name="name"
                       type="text"
                       value={formik.values.name}
                       onChange={formik.handleChange}
                       autoFocus={true}
                       placeholder="Название тега"
                />
                <button onClick={onAddTag}>Сохранить</button>
            </div>
            <div className="tag-list">
                {tagsElements}
            </div>
        </div>
    );
};

export default TagsList;
