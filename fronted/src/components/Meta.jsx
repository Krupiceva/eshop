import React from 'react'
import { Helmet } from 'react-helmet'

function Meta(props) {
	const { title, description, keywords } = props

	return (
		<Helmet>
			<title>{title}</title>
			<meta name='description' content={description} />
			<meta name='keyword' content={keywords} />
		</Helmet>
	)
}

Meta.defaultProps = {
	title: 'Welcome To eShop',
	description: 'We sell best running shoes',
	keywords: 'running, running shoes, best running gear',
}

export default Meta
