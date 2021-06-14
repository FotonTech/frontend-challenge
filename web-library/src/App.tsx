import GlobalState from './global/globalState'
import Router from './router/router'

const App = () => {
  return (
    <GlobalState>
      <Router />
    </GlobalState>
  )
}

export default App
