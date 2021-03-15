import React from 'react';
import Button from '../HOCS/Button';
import ButtonsGroup from '../HOCS/ButtonGroup';

const Circle = () => {
    const arc = React.useRef()

    const [percent, setPercent] = React.useState(0)
    const [defaultStroke, setDefaultStroke] = React.useState(0)
    const [strokeDasharray, setStrokeDasharray] = React.useState(0)
    const [strokeDashoffset, setStrokeDashoffset] = React.useState(0)

    React.useEffect(() => {
        const arcLength = Math.floor(arc.current.getTotalLength())
        setStrokeDasharray(arcLength)
        setStrokeDashoffset(arcLength)
        setDefaultStroke(arcLength)
        console.log(arcLength)
    }, [])

    const onTest = () => {
        for (let i = strokeDasharray; i >= 0 ; i--) {
            setTimeout(() => {
                setStrokeDashoffset(i)
                setPercent(Math.floor((strokeDasharray - i)*100/strokeDasharray))
            }, (strokeDasharray - i)*10)
            setTimeout(() => {
                setStrokeDashoffset(i)
                setPercent(Math.floor((strokeDasharray - i)*100/strokeDasharray))
            }, (strokeDasharray - i)*10)
        }
    }
    const onTest2 = () => {
        const size = 500
        const radius = size / 2
        const startCoordinate = [size/2, ]
    }

    const onClear = () => {
        setStrokeDasharray(defaultStroke)
        setStrokeDashoffset(defaultStroke)
        setPercent(0)
    }

    return (
        <div className="svg">
            <svg viewBox="0 0 500 500" >
                <g id="grid" strokeWidth=".2">
                    <path d="M0 50 H500" />
                    <path d="M0 100 H500" />
                    <path d="M0 150 H500" />
                    <path d="M0 200 H500" />
                    <path d="M0 250 H500" strokeWidth="1" />
                    <path d="M0 300 H500" />
                    <path d="M0 350 H500" />
                    <path d="M0 400 H500" />
                    <path d="M0 450 H500" />

                    <path d="M50 0 V500" />
                    <path d="M100 0 V500" />
                    <path d="M150 0 V500" />
                    <path d="M200 0 V500" />
                    <path d="M250 0 V500" strokeWidth="1"/>
                    <path d="M300 0 V500" />
                    <path d="M350 0 V500" />
                    <path d="M400 0 V500" />
                    <path d="M450 0 V500" />

                </g>
                <g id="points" >
                    <circle cx="50" cy="250" r="5" />
                    <circle cx="250" cy="250" r="5" />
                    <circle cx="450" cy="250" r="5" />
                </g>
                <path ref={arc} id="arc" d={`M150 250 A100 100, 0, 0 1, 350 250`}
                      strokeWidth="200"
                      strokeDasharray={strokeDasharray}
                      strokeDashoffset={strokeDashoffset}
                />
                <rect id="bg-percent" x="175" y="200"
                      width="150" height="100"
                      rx="30" ry="30" />
                <text id="text" x="50%" y="50%" textAnchor="middle" alignmentBaseline="central">{percent} %</text>


            </svg>
            <ButtonsGroup>
                <Button onClick={onTest2} outline size="lg">Попробовать</Button>
                <Button onClick={onClear} outline size="lg">Сбросить</Button>
            </ButtonsGroup>
        </div>
    );
};


export default Circle;
