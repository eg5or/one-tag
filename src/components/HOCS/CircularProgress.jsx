import React from 'react';
import classNames from 'classnames'

const CircularProgress = ({size, color, fill, type, value = 0, maxValue = 100}) => {
    let sizeSvg
    switch (size) {
        case 'xs':
            sizeSvg = 25
            break
        case 'sm':
            sizeSvg = 50
            break
        case 'md':
            sizeSvg = 100
            break
        case 'lg':
            sizeSvg = 150
            break
        case 'xl':
            sizeSvg = 200
            break
        default:
            sizeSvg = 100
            break
    }
    let valueAdj = value
    if (value > maxValue) valueAdj = maxValue
    const percent = (100 * valueAdj) / maxValue
    const cx = sizeSvg / 2
    const cy = sizeSvg / 2
    const strokeWidthFill = sizeSvg / 5
    const strokeWidth = strokeWidthFill - strokeWidthFill / 4 // 14
    const radiusFill = (sizeSvg / 2) - (strokeWidthFill / 2)
    const radius = (sizeSvg / 2) - (strokeWidthFill / 2)
    const maxAngle = 359.999

    const drawCircle = (cx, cy, radius, deg) => { // 50, 50, 40, -91
        const rad = (deg - 270) * Math.PI / 180
        return {
            x: cx - (radius * Math.cos(rad)), // 50 + (40 * -359) => 40
            y: cy - (radius * Math.sin(rad)) // 0
        }
    }

    const drawPointer = (x, y, radius, angleStart, angleEnd) => { // 50, 50, 40, 0, 359
        const start = drawCircle(x, y, radius, -angleEnd) // 50, 50, 40, -359 =>
        const end = drawCircle(x, y, radius, angleStart) // 50, 50, 40, 0 =>
        const largeArc = angleEnd - angleStart <= 180 ? 0 : 1
        return [
            'M',
            start.x,
            start.y,
            'A',
            radius,
            radius,
            0,
            largeArc,
            1,
            end.x,
            end.y
        ]
    }
    const pathValue = drawPointer(cx, cy, radius, 0, percent / 100 * maxAngle)

    return <div className={classNames('circular-progress', {
        'circular-progress__size-xs': size === 'xs',
        'circular-progress__size-sm': size === 'sm',
        'circular-progress__size-md': !size || size === 'md',
        'circular-progress__size-lg': size === 'lg',
        'circular-progress__size-xl': size === 'xl',
    })}>
        <svg viewBox={`0 0 ${sizeSvg} ${sizeSvg}`} >
            <path id="arcFill" className={classNames({
                'circular-progress__color-primary': fill === 'primary',
                'circular-progress__color-secondary': fill === 'secondary',
                'circular-progress__color-warning': fill === 'warning',
                'circular-progress__color-default': !fill || fill === 'default',
                'circular-progress__color-danger': fill === 'danger',
                'circular-progress__color-info': fill === 'info',
                'circular-progress__color-dark': fill === 'dark',
            })} d={`M ${cx} ${cx - radiusFill} A ${radiusFill} ${radiusFill} 0 1 1, ${cx - 0.001} ${cx - radiusFill}`}
                  strokeWidth={strokeWidthFill}
            />
            <path id="arc" className={classNames({
                'circular-progress__color-primary': color === 'primary',
                'circular-progress__color-secondary': color === 'secondary',
                'circular-progress__color-warning': !color || color === 'warning',
                'circular-progress__color-danger': color === 'danger' || value > maxValue,
                'circular-progress__color-info': color === 'info',
            })} d={pathValue.join(' ')}
                  strokeWidth={strokeWidth}
            />
            <circle id="cap" className={classNames({
                'circular-progress__cap-primary': color === 'primary',
                'circular-progress__cap-secondary': color === 'secondary',
                'circular-progress__cap-warning': !color || color === 'warning',
                'circular-progress__cap-danger': color === 'danger' || value > maxValue,
                'circular-progress__cap-info': color === 'info',
            })} cx={pathValue[1]} cy={pathValue[2]} r={strokeWidth/2} />
            {size !== 'xs' && <text id="text" className={classNames({
                'circular-progress__text-sm': size === 'sm',
                'circular-progress__text-md': !size || size === 'md',
                'circular-progress__text-lg': size === 'lg',
                'circular-progress__text-xl': size === 'xl',
                'circular-progress__text-primary': color === 'primary',
                'circular-progress__text-secondary': color === 'secondary',
                'circular-progress__text-warning': !color || color === 'warning',
                'circular-progress__text-danger': color === 'danger' || value > maxValue,
                'circular-progress__text-info': color === 'info',
            })} x="50%" y="50%" textAnchor="middle" alignmentBaseline="central">
                {type === 'percent' ? `${Math.floor(percent)}${size === 'sm' ? '' : '%'}` : value}
            </text>}
        </svg>
    </div>;
};

export default CircularProgress;
