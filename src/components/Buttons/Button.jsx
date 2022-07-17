import React from "react";
import propTypes from "prop-types";
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 10px 20px;
  margin: 0 auto;
  max-width: 100%;
  background-color: ${props => props.theme.colors.buttonBg};
  color: ${props => props.theme.colors.buttonText};
`;

export const Button = ({ type, onClick, children }) => {
	return (
		<StyledButton type={type} onClick={onClick}>
			{children}
		</StyledButton>
	);
};

Button.propTypes = {
	type: propTypes.string.isRequired,
	onClick: propTypes.func,
	text: propTypes.string,
};


