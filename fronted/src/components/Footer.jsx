import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
	const currentDate = new Date()
	const year = currentDate.getFullYear()

	return (
		<footer>
			<Container>
				<Row>
					<Col className='text-center py-3'>
						Copyright &copy; eShop {year}
					</Col>
				</Row>
			</Container>
		</footer>
	)
}

export default Footer
