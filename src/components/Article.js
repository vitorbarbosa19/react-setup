import React from 'react'
import CreateClient from './CreateClient'
import marked from 'marked' //library that parses markdown. Needed because Contentful API returns articles as markdown

export default class Article extends React.Component {
	componentDidMount() {
		CreateClient.getEntry('5f9Qfi6g7eokIwGAKWA6q8')
			.then( (content) => {
				document.getElementById('article-container').innerHTML = marked(content.fields.article)
			})
	}
	render() {
		return <div id='article-container'></div>
	}
}
