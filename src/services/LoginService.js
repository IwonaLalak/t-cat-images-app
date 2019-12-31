export default {

    login(user) {
        return new Promise((resolve, reject) => {
            localStorage.setItem('_catimages_current_user', btoa(user))
            if (this.checkIfUserIsLogged()) {
                resolve(true)
            } else
                reject('Cannot login')
        })
    },

    logout() {
        return new Promise((resolve, reject) => {
            localStorage.removeItem('_catimages_current_user')
            if (!this.checkIfUserIsLogged()) {
                resolve(true)
            } else
                reject('Cannot logout')
        })
    },

    checkIfUserIsLogged() {
        return Boolean(localStorage.getItem('_catimages_current_user'))
    },

    getCurrentUser() {
        if (this.checkIfUserIsLogged())
            return atob(localStorage.getItem('_catimages_current_user'))
        else return null
    }

}