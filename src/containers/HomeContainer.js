import React from 'react'
import { connect } from 'react-redux'
import Home from '../components/Home'
import { addToCart } from '../services/Actions/actions'

const mapStateToProps = state => ({
    cardData: state.data
})
const mapDispatchToProps = dispatch => ({
    addToCartHandler: data => dispatch(addToCart(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)
// export default HomeContainer
