import React from 'react'
import update from 'react-addons-update'

//
// FrameLayout
//
export default class FrameLayout extends React.Component {
	constructor(props) {
		super(props)
		this.state = { stack: [ ] }
	}

	getChildContext() {
		return { frameLayout: this }
	}

	get top() {
		return this.state.stack.length == 0 ? null
			: React.cloneElement(this.state.stack[this.state.stack.length - 1], { parent: this })
	}

	replaceCurrent(component) {
		this.setState(update(this.state, {
			stack: {
				$apply: (currentStack) => {
					const clone = currentStack.slice(0)
					clone[clone.length - 1] = component
					return clone
				},
			},
		}))
		return this
	}

	push(component) {
		this.setState(update(this.state, {
			stack: { $push: [ component ] },
		}))
		return this
	}

	pop() {
		this.setState(update(this.state, {
			stack: { $splice: [ [ -1, 1 ] ] },
		}))
		return this
	}

	render() {
		return <div>
			{this.state.stack.map((element, i) => <div key={i} style={{ display: i == this.state.stack - 1 ? 'block' : 'none' }}>
				{this.top}
			</div>)}
		</div>
	}
}
FrameLayout.childContextTypes = {
	frameLayout: React.PropTypes.object,
}

//
// Frame
//
export class Frame extends React.Component {
	get parent() {
		return this.context.frameLayout
	}

	replaceCurrent(component) {
		return this.parent.replaceCurrent(component)
	}

	push(component) {
		return this.parent.push(component)
	}

	pop() {
		return this.parent.pop()
	}
}
Frame.contextTypes = {
	frameLayout: React.PropTypes.object,
}
