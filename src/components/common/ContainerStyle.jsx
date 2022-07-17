import styled from "styled-components";
import { centerBlock } from "../../style/mixins";

export const Container = styled.div`
	padding: 40px 30px;
	${centerBlock};
	max-width: 480px;
	
	background-color: ${(props) => props.theme.colors.colorBg};
	
`;

