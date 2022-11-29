import { defineStore } from "pinia";

export const userStore = defineStore("users", {
    state: () => ({
        user: null,
        singleNote: null
    }),

    getters: {
        _currentUser: (state) => {
            const user = state.user
            delete user?.password
            return user
        },
        _currentNote: (state) => {
            return state.singleNote;
        }
    },

    actions: {
        setCurrentUser(user) {
            this.$state.user = user
        },
        LogOut(){
            this.$state.user = null
        },
        setSingleNote(note) {
            this.$state.singleNote = note
        }
    },
     persist: true
}
)