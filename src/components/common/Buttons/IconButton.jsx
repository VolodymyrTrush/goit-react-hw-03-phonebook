import React from "react";
import propTypes from "prop-types";
import styled from 'styled-components';

const IconButtonWrapper = styled.button`
  padding: 10px;
  min-width: 40px;
  background-color: ${props => props.theme.colors.buttonBg};
  fill: ${props => props.theme.colors.buttonText};
`;

export const IconButton = ({ children, onClick, ...allyProps }) => {
	return (
		<IconButtonWrapper type="button" onClick={onClick} {...allyProps}>
			{children}
		</IconButtonWrapper>
	);
};

IconButton.defaultProps = {
	onClick: () => null,
	children: null,
};

IconButton.propTypes = {
	children: propTypes.node,
	onClick: propTypes.func,
	"aria-label": propTypes.string.isRequired,
};
