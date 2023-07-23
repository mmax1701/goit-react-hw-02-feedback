import PropTypes from 'prop-types';
import css from './Statistics.module.css'

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <div>
            <ul>
                <li>Good: {good}</li>
                <li>Neutral: {neutral}</li>
                <li>Bad: {bad}</li>
            </ul>
            <div>
                <p>Total: {total()}</p>
                <p>Positive feedback: {positivePercentage()}%</p>
            </div>
        </div>
    );
};