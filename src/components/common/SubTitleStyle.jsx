import styled from "styled-components";
import { font, widthHeight } from "../../style/mixins";

export const SubTitle = styled.h2`
	font-family: ${(props) => props.theme.fonts.secondary};
	${widthHeight(240)};
	${font({ fs: 24, fw: 600, lh: 28 })};
	margin-bottom: 10px;
	margin-top: 10px;
	color: ${(props) => props.theme.colors.primaryText};
	
`;
