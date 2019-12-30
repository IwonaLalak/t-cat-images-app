export default {

    login(user) {
        localStorage.setItem('_catimages_current_user', user)
    },

    logout() {
        localStorage.removeItem('_catimages_current_user')
    },

    checkIfUserIsLogged() {
        return Boolean(localStorage.getItem('_catimages_current_user'))
    },

    getCurrentUser() {
        return localStorage.getItem('_catimages_current_user')
    }

}