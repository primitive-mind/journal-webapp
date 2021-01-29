const classes = {
	topBar: 'w-screen h-12 bg-gray-100',
}

interface TopBarProps {
	children: {},
}

function TopBar(props: TopBarProps) {
	return (
		<div className={classes.topBar}>
			{props.children}
		</div>
	)
}

export default TopBar