import Theme from 'vitepress/dist/client/theme-default'
import Button from '../../../devui/button/src/button'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.component('d-button', Button)
  }
}
