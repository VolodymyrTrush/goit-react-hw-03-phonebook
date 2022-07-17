
import { ContactItem } from "./ContactItem/ContactItem";
import propTypes from "prop-types";
import styled from "styled-components";
import { font } from "../../style/mixins";

const List = styled.ol`
	padding: 20px;
	max-width: 400px;
	overflow-y: hidden;

	${font({ fs: 16, fw: 400, lh: 20 })};
	
	background-color: ${(props) => props.theme.colors.greyBg};
	
`;
export const ContactList = ({ filterContacts, onDelete }) => {
	return (
		<List>
			{filterContacts().map(({ name, number, id }) => (
				<ContactItem
					key={id}
					name={name}
					id={id}
					number={number}
					onDelete={onDelete}
				/>
			))}
		</List>
	);
};

ContactList.propTypes = {
	filterContacts: propTypes.func.isRequired,
	onDelete: propTypes.func.isRequired,
};
