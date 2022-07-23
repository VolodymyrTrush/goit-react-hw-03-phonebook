import { Component } from "react";
import { Formik, ErrorMessage, Form, Field } from "formik";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "../common/Buttons/Button";
import * as yup from 'yup';
import propTypes from "prop-types";
import styled from "styled-components";
import { font } from "../../style/mixins";

const AddForm = styled(Form)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	max-width: 400px;
	height: 240px;
	padding: 20px;
	background-color: ${(props) => props.theme.colors.greyBg};
`;

const Input = styled(Field)`
	border: 0;
	outline: 0;
	width: 100%;
	margin-bottom: 10px;
	padding: 10px;
`;

const Message = styled.p`
	${font({ fs: 14, fw: 400, lh: 16 })};
	color: ${(props) => props.theme.colors.red};
	display: block;
	margin-bottom: 4px;
`;

export const LabelForm = styled.label`
	${font({ fs: 16, fw: 700, lh: 20 })};
	display: block;
	margin-bottom: 10px;
`;

const schema = yup.object({
  name: yup.string().required(),
  number: yup.string().required().test({
    test: (value) => /^[\d+][\d()-]{4,14}\d$/i.test(value),
  }),
});

const FormError = ({ name }) => {
	return (
		<ErrorMessage
			name={name}
			render={(message) => <Message>{message}</Message>}
		/>
	);
};

export class ContactForm extends Component {
	handleSubmit = ({ name, number }, { resetForm }) => {
		const nameInContacts = this.props.contacts.find(
			(contact) => contact.name.toLowerCase() === name.toLowerCase()
		);
		if (nameInContacts) {
			toast.warn(`${name} is already in contacts`);
			return;
		}
		const contact = { id: nanoid(), name, number };
		this.props.onSubmit(contact);
		resetForm();
	};

	render() {
		return (
			<Formik initialValues={{
	name: "",
	number: "",
}} validationSchema={schema} onSubmit={this.handleSubmit}>
				<AddForm autoComplete="off">
					<div>
						<LabelForm htmlFor="name">Name</LabelForm>
						<div>
							<Input
								type="text"
								name="name"
								
							/>
							<FormError name="name" />
						</div>
					</div>
					<div>
						<LabelForm htmlFor="number">Number</LabelForm>
						<div>
							<Input
								type="tel"
								name="number"
								
							/>
							<FormError name="number" />
						</div>
					</div>
					<Button type="submit" children={"Add contact"} />
				</AddForm>
			</Formik>
		);
	}
}

ContactForm.propTypes = {
	onSubmit: propTypes.func.isRequired,
	contacts: propTypes.arrayOf(propTypes.object).isRequired,
};
