class LocalStorageHelper {
    getItem(key, isJson, throwbackValue) {
        if (!(this.hasItem(key))) {
            this.setItem(key, throwbackValue, isJson)
        }

        let item = localStorage.getItem(key)

        if (isJson) {
            return JSON.parse(item)
        }
        return item
    }

    hasItem(key) {
        return key in localStorage
    }

    setItem(key, value, stringify) {
        if (stringify) {
            value = JSON.stringify(value)
        }
        localStorage.setItem(key, value)
    }
}

export default LocalStorageHelper