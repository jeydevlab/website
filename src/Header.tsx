import Styles from './Header.style';
import { Link } from 'react-router';

// @ts-ignore
const assetPrefix = process.env.ASSET_PREFIX;

export function Header() {
	return (
		<Styles.Container>
			<Link to={'/'}>Home</Link>
			<Link to={'/videos'}>Videos</Link>
			<img src={`${assetPrefix}/images/website_logo.png`}  alt={'Logo image'}/>
			<Link to={'/gaming'}>Gaming</Link>
			<Link to={'/about'}>About</Link>

		</Styles.Container>
	)
}
