export const storageFunction = {
  methods: {
    saveToStorage(name, item) {
      localStorage.setItem(`${name}`, item)
    },
  }
}