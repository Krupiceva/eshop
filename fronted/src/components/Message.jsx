import React from 'react'
import { Alert } from 'react-bootstrap'

function Message(props) {
	const { variant, children } = props

	return <Alert variant={variant}>{children}</Alert>
}

Message.defaultProps = {
	variant: 'info',
}

export default Message
