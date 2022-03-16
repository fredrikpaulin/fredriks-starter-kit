import {MainContext, Fragment} from '../../contexts/MainContext'

const App = () => {
    const [state, dispatch] = useContext(MainContext)
    return (
        <Fragment>
            {
                state.loading ? <div>Loading...</div> : (
                    <div>App</div>
                )
            }
        </Fragment>
    )
}
export default App