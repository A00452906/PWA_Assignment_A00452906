import PropTypes from 'prop-types'

const Name_SubHeader = ({ name }) => {

    return (
        <header className='header'>
            <h2>
                {name}
            </h2>
        </header>
    )
}

Name_SubHeader.defaultProps = {
    title: 'Student Name'
};

Name_SubHeader.propTypes = {
    title: PropTypes.string.isRequired
};

export default Name_SubHeader
