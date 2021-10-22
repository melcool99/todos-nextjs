import { Provider } from 'react-redux'
import store from '../redux/store'
import { AppWrapper } from '../components/Components.styles'
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AppWrapper>
          <Component {...pageProps} />
      </AppWrapper>
    </Provider>
  )
}
export default MyApp
