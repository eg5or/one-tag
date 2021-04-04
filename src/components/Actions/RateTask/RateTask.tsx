import React from 'react';
import ButtonGroup from '../../HOCS/ButtonGroup';
import Button from '../../HOCS/Button';
import Card from '../../HOCS/Card';

const RateTask: React.FC = () => {
    const onRateUp = ():void => {

    }
    const onRateDown = ():void => {

    }

    return <section id="rate-task">
        <div className="container">
            <div className="main__title">
                <h4>Оцени таску</h4>
            </div>
            <div className="main__content">
                <Card>

                </Card>
                <ButtonGroup fullWidth>
                    <Button onClick={onRateDown} iconLeft="thumb_down_alt" size="lg" danger fullWidth />
                    <Button onClick={onRateUp} iconRight="thumb_up_alt" size="lg" secondary fullWidth />
                </ButtonGroup>

            </div>
        </div>
    </section>
};

export default RateTask;
