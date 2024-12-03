import Styles from './Header.style';

export function Header() {
	return (
		<Styles.Container>
			<a href={'/home'}>Home</a>
			<a href={'/videos'}>Videos</a>
			<img src={'/images/with_hoodie_and_laptop_left.png'}  alt={'Logo image'}/>
			<a href={'/gaming'}>Gaming</a>
			<a href={'/about'}>About</a>

		</Styles.Container>
	)
}
