import React from 'react';
import Input from '../HOCS/Input';
import TextArea from '../HOCS/TextArea';
import ButtonGroup from '../HOCS/ButtonGroup';
import Button from '../HOCS/Button';

const Main = () => {
    return <div className="main-wrapper">
        <section id="add-task">
            <div className="container">
                <div className="main__title">
                    <h4>Добавь таску</h4>
                </div>
                <div className="main__content">
                    <TextArea id="new-task"
                              name="new-task"
                              label="писать здесь"
                              rows="4"
                    />
                    <Button iconLeft="save" size="lg" primary fullWidth>Поехали</Button>
                </div>
            </div>
        </section>
        <section id="rate-task">
            <div className="container">
                <div className="main__title">
                    <h4>Оцени таску</h4>
                </div>
                <div className="main__content">
                    <TextArea id="new-task"
                              name="new-task"
                              label="писать здесь"
                              rows="4"
                    />
                    <ButtonGroup fullWidth>
                        <Button iconLeft="thumb_down_alt" size="lg" danger fullWidth />
                        <Button iconRight="thumb_up_alt" size="lg" secondary fullWidth />
                    </ButtonGroup>

                </div>
            </div>
        </section>
        <section id="do-task">
            <div className="container">

            </div>
        </section>
        <section id="rate-done-task">
            <div className="container">

            </div>
        </section>
    </div>
};

export default Main;
