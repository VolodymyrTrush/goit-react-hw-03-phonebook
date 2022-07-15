import { Form, Field } from "formik";
import styled from "styled-components";
import { font } from "../../mainstyle/mixins";

export const AddForm = styled(Form)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	max-width: 400px;
	height: 240px;
	padding: 20px;
	border-radius: 5px;
	background-color: ${(props) => props.theme.colors.greyBg};
	
`;

export const Input = styled(Field)`
	border: 0;
	outline: 0;
	width: 100%;
	margin-bottom: 10px;
	
	padding: 10px;
	
`;

export const Message = styled.p`
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
