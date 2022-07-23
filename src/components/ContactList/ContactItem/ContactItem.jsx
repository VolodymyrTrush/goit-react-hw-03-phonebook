
import { ReactComponent as DeleteIcon } from "../../../Icon/delicon.svg";
import { IconButton } from "../../common/Buttons/IconButton";
import propTypes from "prop-types";
import styled from "styled-components";

const Item = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
	&:not(:last-child) {
		margin-bottom: 10px;
	}
`;

export const ContactItem = ({ id, name, number, onDelete }) => {
	return (
		<Item>
			<span>{name}:</span>
			<span>{number} </span>
			<IconButton aria-label="Delete contact" onClick={() => onDelete(id)}>
				<DeleteIcon />
			</IconButton>
		</Item>
	);
};

ContactItem.propTypes = {
	name: propTypes.string.isRequired,
	id: propTypes.string.isRequired,
	number: propTypes.string.isRequired,
	onDelete: propTypes.func.isRequired,
};
