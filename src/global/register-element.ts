import { App } from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import {
  ElButton,
  ElAside,
  ElAlert,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElTabs,
  ElTabPane,
  ElIcon,
  ElCheckbox,
  ElLink
} from 'element-plus'

const components = [
  ElButton,
  ElAside,
  ElAlert,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElTabs,
  ElTabPane,
  ElIcon,
  ElCheckbox,
  ElLink
]
export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}
