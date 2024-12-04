import Styles from './Header.style';

// @ts-ignore
const assetPrefix = process.env.ASSET_PREFIX;

export function Header() {
	return (
		<Styles.Container>
			<a href={'/'}>Home</a>
			<a href={'/videos'}>Videos</a>
			<img src={`${assetPrefix}/images/website_logo.png`}  alt={'Logo image'}/>
			<a href={'/gaming'}>Gaming</a>
			<a href={'/about'}>About</a>

		</Styles.Container>
	)
}
