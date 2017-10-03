import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Webfont from 'webfontloader'
import App from './components/App'

Webfont.load({
	google: {
		families: [
			'Poppins: 300, 400, 700',
			'Spectral: 300, 400, 700'
		]
	}
})

ReactDOM.render(
	<App />,
	document.getElementById('app')
)