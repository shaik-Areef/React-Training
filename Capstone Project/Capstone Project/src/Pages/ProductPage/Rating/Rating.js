import { useState } from 'react';

function Rating(props) {
    const [hoverValue, setHovervalue] = useState()

    const onMouseEnterHandler = (value) => {
        setHovervalue(value)
    }

    const onMouseLeaveHandler = () => {
        setHovervalue()
    }

    const onClickHandler = (value) => {
        props.onChangeValue(value);
    }

    return (
        <div data-testid='rating-container'>
            <i className='far fa-frown'
                onMouseEnter={() => onMouseEnterHandler(1)}
                onMouseLeave={() => onMouseLeaveHandler()}
                style={{
                    fontSize: '36px',
                    margin: '10px',
                    cursor: 'pointer',
                    color: hoverValue >= 1 || props.selectedValue >= 1 ? 'yellow' : ''
                }}
                onClick={() => onClickHandler(1)}></i>

            <i className='far fa-meh'
                onMouseEnter={() => onMouseEnterHandler(2)}
                onMouseLeave={() => onMouseLeaveHandler()}
                style={{
                    fontSize: '36px',
                    margin: '10px',
                    cursor: 'pointer',
                    color: hoverValue >= 2 || props.selectedValue >= 2 ? 'yellow' : ''
                }}
                onClick={() => onClickHandler(2)}></i>

            <i className='far fa-smile'
                onMouseEnter={() => onMouseEnterHandler(3)}
                onMouseLeave={() => onMouseLeaveHandler()}
                style={{
                    fontSize: '36px',
                    margin: '10px',
                    cursor: 'pointer',
                    color: hoverValue >= 3 || props.selectedValue >= 3 ? 'yellow' : ''
                }}
                onClick={() => onClickHandler(3)}></i>

            <i className='far fa-grin'
                onMouseEnter={() => onMouseEnterHandler(4)}
                onMouseLeave={() => onMouseLeaveHandler()}
                style={{
                    fontSize: '36px',
                    margin: '10px',
                    cursor: 'pointer',
                    color: hoverValue >= 4 || props.selectedValue >= 4 ? 'yellow' : ''
                }}
                onClick={() => onClickHandler(4)}></i>

            <i className='far fa-grin-stars'
                onMouseEnter={() => onMouseEnterHandler(5)}
                onMouseLeave={() => onMouseLeaveHandler()}
                style={{
                    fontSize: '36px',
                    margin: '10px',
                    cursor: 'pointer',
                    color: hoverValue >= 5 || props.selectedValue >= 5 ? 'yellow' : ''
                }}
                onClick={() => onClickHandler(5)}></i>
        </div>
    )
}
export default Rating