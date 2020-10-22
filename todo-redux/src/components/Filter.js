import React from 'react'
import { connect } from 'react-redux'
import { setFilter, Filters } from '../actions'

const Filter = ({ filter, setFilter }) => {
    return (
        <div>
            {Object.values(Filters).map(ft => (
                <button
                    key={ft}
                    disabled={ft === filter} 
                    onClick={() => setFilter(ft)}
                >
                    {ft}
                </button>
            ))}
        </div>
    )
}

const mapStateToProps = state => ({
    filter: state.filter
})

const mapDispatchToProps = dispatch => ({
    setFilter: filter => dispatch(setFilter(filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter)