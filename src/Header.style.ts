import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
	justify-content: space-between;
		width: 50%;
		
	img {
			border-radius: 50%;
			height: 128px;
			width: 128px;
			background-color: white;
			padding: 5px;
	}
		
	a {
			text-decoration: none;
			
			:active {
					
			}
	}
`

export default {
	Container,
}
