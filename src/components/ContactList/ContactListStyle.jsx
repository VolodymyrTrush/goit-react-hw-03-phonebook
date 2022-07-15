import styled from "styled-components";
import { font } from "../../mainstyle/mixins";

export const List = styled.ol`
	padding: 20px;
	max-width: 400px;
	overflow-y: hidden;

	${font({ fs: 16, fw: 400, lh: 20 })};
	
	background-color: ${(props) => props.theme.colors.greyBg};
	
`;
