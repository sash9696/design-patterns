

//lets say we need to add a button in content that collapse sidebar
//common approach would be

const Component = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
	return (
		<div className="container">
			<div className="sidebar" style={{width: isCollapsed ? 10 : 'auto'}}>
				<SlowComponent />
			</div>
			<div className="content">
                <button onClick={() => setIsCollapsed(!isCollapsed)}/>
				<AnotherSlowComponent />
			</div>
		</div>
	);
};

//again on state update entire thing will rerender
//and here we cannot use previous tricks like passing state down
//or assing compoennts as children beacuse state is wrapped in too many places


//so we can again move state related activity in a single component 
//and rather than passing multiple components as children
//we pass them in different props

//again props will not get affected due to state changes
const Layout = ({column, content}) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    <div className="container">
			<div className="sidebar" style={{width: isCollapsed ? 10 : 'auto'}}>
				{column}
			</div>
			<div className="content">
                <button onClick={() => setIsCollapsed(!isCollapsed)}/>
                {content}

			</div>
		</div>
}

const Component = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
	return (
		<Layout
            column={SlowComponent}
            content={AnotherSlowComponent}
        />
	);
};

//ultimately the point of these patterns is to isolate the state changes
