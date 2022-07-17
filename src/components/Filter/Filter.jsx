import { Component } from "react";
import { LabelForm } from "../ContactForm/ContactForm";
import propTypes from "prop-types";
import styled from "styled-components";

const FilterInput = styled.input`
	border: 0;
	outline: 0;
	width: 100%;
	padding: 10px;
`;

const FilterWrapper = styled.div`
	width: 240px;
	margin-bottom: 20px;
`;

export class Filter extends Component {
	handleChange = ({ target: { value } }) => {
		this.props.onChange(value);
	};

	render() {
		return (
			<FilterWrapper>
				<LabelForm htmlFor="filter">Find contacts by name</LabelForm>
				<div>
					<FilterInput
						name="filter"
						type="filter"
						onChange={this.handleChange}
					/>
				</div>
			</FilterWrapper>
		);
	}
}

Filter.propTypes = {
	onChange: propTypes.func.isRequired,
};
