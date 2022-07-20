import { App } from 'vue'
import {
  ElButton,
  ElAside,
  ElAlert,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio
} from 'element-plus'

const components = [
  ElButton,
  ElAside,
  ElAlert,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio
]
export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
