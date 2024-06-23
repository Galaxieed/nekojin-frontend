import style from './Capsule.module.css';
import PropTypes from 'prop-types';
export default function MyCapsule(props) {
    return (
        <div className={`${style.capsuleContainer} ${props.isFilled && style.filled}`}>
            <h6>{props.text.toUpperCase()}</h6>
        </div>
    )
}

MyCapsule.propTypes = {
    text: PropTypes.string.isRequired,
    isFilled: PropTypes.bool.isRequired,
}