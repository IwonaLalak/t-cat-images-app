export default {


    setView(view) {
        localStorage.setItem('_catimages_userview', view)
    },

    getView() {
        return localStorage.getItem('_catimages_userview')
    },

    checkIfViewIsSetted() {
        return Boolean(localStorage.getItem('_catimages_userview'))
    },

    removeView() {
        localStorage.removeItem('_catimages_userview')
    }

}