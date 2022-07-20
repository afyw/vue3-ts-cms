import { App } from 'vue'
import registerElement from './register-element'
export function registerAPP(app: App): void {
  registerElement(app)
}
