# react-frame-layout

[![Greenkeeper badge](https://badges.greenkeeper.io/jrop/react-frame-layout.svg)](https://greenkeeper.io/)

> Easily implement stackable layouts in React

## Installation

```sh
$ npm install react-frame-layout
```

## Use

```js
import FrameLayout, { Frame } from 'react-frame-layout'

//
// This is your front-facing component that you render to the DOM:
// ReactDOM.render(<App />, ...)
//
class App extends FrameLayout {
	constructor(props) {
		super(props)
		this.state = { stack: [ <First /> ] }
	}
}

class First extends Frame {
	onGoClick() {
		this.push(<Second />)
	}

	render() {
		return <div>Main <button onClick={this.onGoClick.bind(this)}>Goto: Second</button></div>
	}
}

class Second extends Frame {
	onBackClick() {
		this.pop()
	}

	render() {
		return <div>Main <button onClick={this.onBackClick.bind(this)}>Back</button></div>
	}
}
```

## Liscense

ISC License (ISC) Copyright (c) 2016, Jonathan Apodaca jrapodaca@gmail.com

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
