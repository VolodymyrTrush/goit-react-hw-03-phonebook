import styled from "styled-components";
import { font, widthHeight } from "../../style/mixins";

export const MainTitle = styled.h1`
	font-family: ${(props) => props.theme.fonts.secondary};
	${widthHeight(240)};
	${font({ fs: 28, fw: 600, lh: 32 })};
	margin-bottom: 10px;
	color: ${(props) => props.theme.colors.primaryText};
	
`;

