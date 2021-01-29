import TopBar from './components/TopBar'
import MenuIcon from './icons/MenuIcon'

const classes = {
	home: 'w-screen h-screen',
	menuIcon: 'fill-blue-400 text-green-600 stroke-2 bg-white h-5 w-5'
}

function Home() {
	return (
		<div className={classes.home}>
			<TopBar>
				<MenuIcon className={classes.menuIcon} />
			</TopBar>	
		</div>
	)
}

export default Home 