import firebase from "firebase/compat";

export interface iUser {
    user: firebase.User | null | undefined
}