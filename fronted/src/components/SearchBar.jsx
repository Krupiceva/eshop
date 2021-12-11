import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

function SearchBar(props) {
	const { history } = props
	const [keyword, setKeyword] = useState('')

	const submitHandler = (e) => {
		e.preventDefault()
		if (keyword.trim()) {
			history.push(`/search/${keyword}`)
		} else {
			history.push('/')
		}
	}

	return (
		<Form onSubmit={submitHandler} className='d-flex'>
			<Form.Control
				type='text'
				name='q'
				onChange={(e) => setKeyword(e.target.value)}
				placeholder='Search Products...'
				className='mr-sm-2 ml-sm-5 mt-2'></Form.Control>
			<Button type='submit' variant='outline-light' className='ms-2 mt-2'>
				<i className='fas fa-search'></i>
			</Button>
		</Form>
	)
}

export default SearchBar
