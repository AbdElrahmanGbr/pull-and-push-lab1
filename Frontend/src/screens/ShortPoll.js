import React, { useEffect, useState } from 'react';
import { Col, Form, ListGroup, Row } from 'react-bootstrap';

const ShortPoll = () => {
	const [message, setMessage] = useState('');

	const [messages, setMessages] = useState([]);

	const base_url = 'http://localhost:8001/messages/short';

	const getData = () => {
		setInterval(() => {
			fetch(base_url)
				.then((response) => response.json())
				.then((data) => {
					setMessages(data.data);
				})
				.catch((err) => console.log(err));
		}, 5000);
	};

	useEffect(() => {
		getData();
	}, []);

	const onHandleSubmit = (e) => {
		e.preventDefault();
		// Post Message
		fetch(base_url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ message }),
		});

		setMessage('');
	};
	return (
		<Row>
			<Col className='mx-auto my-5' md={6}>
				<Form onSubmit={onHandleSubmit}>
					<Form.Group className='mb-3' controlId='formBasicEmail'>
						<Form.Label>Messages </Form.Label>
						<Form.Control
							value={message}
							type='text'
							placeholder='Enter Your Message'
							onChange={(e) => setMessage(e.target.value)}
						/>
					</Form.Group>
				</Form>
			</Col>

			<ListGroup>
				{messages &&
					messages.map((mess, index) => {
						return (
							<ListGroup.Item key={index}>
								<div class="p-5 bg-light">
										<h1 class="display-3 text-center">{mess}</h1>
								</div>
							</ListGroup.Item>
						);
					})}
			</ListGroup>
		</Row>
	);
};

export default ShortPoll;
