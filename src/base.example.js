import Rebase from 're-base'
import firebase from 'firebase/app'
import  'firebase/auth'

import  'firebase/database'
// Initialize Firebase
const config = {
  apiKey: "YOUR API KEY",
  authDomain: "YOUR AUTH DOMAIN",
  databaseURL: "YOUR DATABASE URL",
  projectId: "YOUR PROJECT ID",
  storageBucket: "YOUR STORAGE BUCKET",
  messagingSenderId: "YOUR MESSAGING SENDER ID"
}

const app = firebase.initializeApp(config)
  const db = firebase.database(app)

  export const auth = firebase.auth()
  export const googleProvider= new firebase.auth.GoogleAuthProvider()
  export const githubProvider = new firebase.auth.GithubAuthProvider();

  export default Rebase.createClass(db)