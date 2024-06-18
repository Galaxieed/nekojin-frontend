import style from './Button.module.css';
import PropTypes from 'prop-types';

export default function MyButton(props) {
    return (
        <button className={props.isPrimary ? style.primaryButton : style.secondaryButton} 
        onClick={props.onClick}>{props.icon} {props.text}</button>
    )
}

MyButton.propTypes = {
    isPrimary: PropTypes.bool,
    icon: PropTypes.any,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

