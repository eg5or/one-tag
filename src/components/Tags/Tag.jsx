import React from 'react';
import {changeRateOnTag} from '../../redux/tagsReducer';

const Tag = ({name, rate, id, dispatch}) => {
    const [showPopup, setShowPopup] = React.useState(false)
    const onShowPopup = () => {
        setShowPopup(true)
    }
    const onHidePopup = () => {
        setShowPopup(false)
    }
    const onRateUp = () => {
        console.log(id, ++rate)
        dispatch(changeRateOnTag(id, rate++))
    }
    const onRateDown = () => {
        console.log(id, --rate)
        dispatch(changeRateOnTag(id, rate--))
    }
    return <div className="tag-wrapper"
                onMouseEnter={onShowPopup}
                onMouseLeave={onHidePopup}
    >
        <div className="tag-text">{name}</div>
        {showPopup && <div className="tag-popup">
            <div className="tag-popup__container">
                <div onClick={onRateUp} className="tag-popup__btn">
                            <span className="material-icons">
                                thumb_up_alt
                            </span>
                </div>
                <div className="tag-popup__rate">{rate}</div>
                <div onClick={onRateDown} className="tag-popup__btn">
                            <span className="material-icons">
                                thumb_down_alt
                            </span>
                </div>
            </div>
        </div>}
    </div>;
};

export default Tag;
