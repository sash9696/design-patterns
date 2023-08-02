//Preventing React re-renders with composition

//one way is to move the state down

//lets say u have a component and u have a taks to add a button that opens 
//a modal
//most people would do something like this

const Component = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <SomeComponent>
            {isOpen && <ModalComponent/>}
            <Button onCLick = {() => setIsOpen(true)} >
                Open Modal
            </Button>
            <SlowComponent/>
            <AnotherSlowComponent/>
        </SomeComponent>
    )
}
//as u can see that when setIsOpen updates the state the parent Component will 
//re-render and so SlowComponent and AnotherSlowComponent will also be rerendered
//thats y modal cal take some time probably a sec

//to solve this issue
//ofcourse we can use React.Memo but it is unnecessary for this case
//one way is to extract all state related from Component to another component
//lets call it as ButtonWithModal

const ButtonWithModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {isOpen && <ModalComponent/>}
            <Button onCLick = {() => setIsOpen(true)} >
                Open Modal
            </Button>
  
        </>
    )
}

//then we can use it 

const Component = () => {

    return (
        <SomeComponent>
            <ButtonWithModal/>
            <SlowComponent/>
            <AnotherSlowComponent/>
        </SomeComponent>
    )
}
//so in this case whenever state update happen it will happen inside
//ButtonWithModal so it will not affect SlowComponent and AnotherSlowComponent




