import type { App, ObjectPlugin } from 'vue'

const AppGlobalErrorPlugin: ObjectPlugin = {
  install(app: App) {
    app.config.errorHandler = (err, vm, info) => {
      console.error("Error:", err);
      console.error("Vue component:", vm);
      console.error("Additional info:", info);
    };
  }
}

export default AppGlobalErrorPlugin
