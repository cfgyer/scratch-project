import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import '../Navigation.css';

const Navigation = () => {
	return (
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<a class="navbar-brand" href="#">
				Navbar
			</a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarTogglerDemo02">
				<ul class="navbar-nav mr-auto mt-2 mt-lg-0">
					<li class="nav-item active">
						<LinkContainer to="/">
							<Nav.Link>Home</Nav.Link>
						</LinkContainer>
					</li>
					<li class="nav-item">
						<LinkContainer to="/product">
							<Nav.Link to="/product">Product</Nav.Link>
						</LinkContainer>
					</li>
					<li class="nav-item">
						<LinkContainer to="/about">
							<Nav.Link to="/about">About </Nav.Link>
						</LinkContainer>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navigation;

// <Navbar bg="light" expand="lg">
// 	<Container>
// 		<Navbar.Brand>Dream Team</Navbar.Brand>
// 		<Navbar.Toggle aria-controls="basic-navbar-nav" />
// 		<Navbar.Collapse id="basic-navbar-nav">
// 			<div className=" mx-auto">
// 				<NavLink to="/">Home</NavLink>
// 			</div>
// 			<div className="mx-auto">
// 				<NavLink to="/product">Product</NavLink>
// 			</div>
// 			<div className="mx-auto">
// 				<NavLink to="/about">About </NavLink>
// 			</div>
// 		</Navbar.Collapse>
// 	</Container>
// </Navbar>
