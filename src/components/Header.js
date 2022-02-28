import PropTypes from 'prop-types'
//import { useLocation } from "react-router-dom";

const Header = ({ title }) => {

    return (
        <header className='header'>
            <h1>{title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: 'Todo App'
};

Header.propTypes = {
    title: PropTypes.string.isRequired
};

export default Header
