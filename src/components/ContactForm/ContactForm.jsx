import { Component } from "react";
import { Formik, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "../Buttons/Button";
import { AddForm, Input, Message, LabelForm } from "./ContactFormStyle";
import propTypes from "prop-types";

const initialValues = {
	name: "",
	number: "",
};

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
			<Formik initialValues={initialValues} onSubmit={this.handleSubmit}>
				<AddForm autoComplete="off">
					<div>
						<LabelForm htmlFor="name">Name</LabelForm>
						<div>
							<Input
								type="text"
								name="name"
								pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
								title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
								required
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
								pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
								title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
								required
							/>
							<FormError name="number" />
						</div>
					</div>
					<Button type="submit" text={"Add contact"} />
				</AddForm>
			</Formik>
		);
	}
}

ContactForm.propTypes = {
	onSubmit: propTypes.func.isRequired,
	contacts: propTypes.arrayOf(propTypes.object).isRequired,
};
