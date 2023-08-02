
//Second way is to use component as child props

//lest say we want to track scrolling event in this particular component
// const Component = () => {

//     return (
//         <div>
//             <SlowComponent/>
//             <AnotherSlowComponent/>
//         </div>
//     )
// }

//normally we would do like this 
const Component = () => {
    const [scrollY, setScrollY] = useState(0);
    return (
        <div onScroll={({currentTarget}) => setScrollY(currentTarget.scrollTop)}>
            <SlowComponent/>
            <AnotherSlowComponent/>
        </div>
    )

}

//again it re renders everything

//again u can fdo with React.memo but not required
//so we can pass the slow components as child props or children
//childrena re nothing but props and props do not get affected by state changeas

const Component = () => {
    const [scrollY, setScrollY] = useState(0);
    return (
        <ComponentWithScroll>
            <SlowComponent/>
            <AnotherSlowComponent/>
        </ComponentWithScroll>
    )

}
//or its a same syntax top one is beeter
const Component = () => {
    //not that much readable as compred to the top one
    const [scrollY, setScrollY] = useState(0);
    return (
        <ComponentWithScroll  children={
            <>
             <SlowComponent/>
            <AnotherSlowComponent/>
            </>
        } />
          
    )

}

const ComponentWithScroll = ({children}) => {
    const [scrollY, setScrollY] = useState(0);
    return (
        <div onScroll={({currentTarget}) => setScrollY(currentTarget.scrollTop)}>
            {children}
        </div>
    )
}