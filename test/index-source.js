import assert from 'assert'
import React from 'react'
import ReactDOM from 'react-dom'
import FrameLayout, { Frame } from '../index-source'

class Second extends Frame {
	render() {
		return <div>
			<p>Second</p>
			<button type="button" onClick={() => this.pop()}>Back</button>
		</div>
	}
}

class Main extends Frame {
	render() {
		return <div>
			<p>Main</p>
			<button type="button" onClick={() => this.push(<div><Second /></div>)}>Go to second frame</button>
		</div>
	}
}

class App extends FrameLayout {
	constructor(props) {
		super(props)
		this.state = { stack: [ <Main /> ] }
	}
	render() {
		return <div>
			<h1>Frame</h1>
			{this.top}
		</div>
	}
}

window.addEventListener('load', function () {
	ReactDOM.render(<App />, document.getElementById('react'))

	mocha.setup('bdd')
	describe('react-stack-frame-layout', function () {
		it('should show the main view', function () {
			assert(document.querySelector('#react').innerText.indexOf('Main') != -1, 'The main frame is not visible')
		})

		it('should transition to the second view', function () {
			document.querySelector('#react button').click()
			assert(document.querySelector('#react').innerText.indexOf('Second') != -1, 'The second frame is not visible')
		})

		it('should go back to the main view', function () {
			document.querySelector('#react button').click()
			assert(document.querySelector('#react').innerText.indexOf('Main') != -1, 'The main frame is not visible')
		})
	})
	mocha.run()
})
