import React from 'react'
import { connect } from 'react-redux'
import { push, punch, kick } from '../practiceRedux/actionTypes'

function Fight(props) {
	return (
		<div>
			<h2>Situation is - {props.situation}</h2>
			<button onClick={props.push}>Push</button>
			<button onClick={props.punch}>Punch</button>
			<button onClick={props.kick}>Kick</button>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		situation: state.situation
	}
}

const mapDispatchToProps = dispatch => {
	return {
		push: () => dispatch(push()),
		punch: () => dispatch(punch()),
		kick: () => dispatch(kick())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Fight)