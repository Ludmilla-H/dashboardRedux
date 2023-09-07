import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import Public from './Pages/Public'
import Private from './Pages/Private'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import { initUser, resetUser } from './redux'


function App() {

  const dispatch = useDispatch()

  // const compteur = useSelector(state => state.compteur) ;

  const userID = useSelector(state => state.user)
  //s'abonner au statut de l'utilisateur dans firebase
  onAuthStateChanged(auth, user => {
    if (user) {
      //si il est connecte on le diffuse dans l'app
      dispatch(initUser(user.uid))

    } else {

      //sinon on lui dit qu'il n'est pasconnecté 
      dispatch(resetUser())
    }

  })

  return (
    <>
      {/* <div> Compteur : { compteur }</div> */}

      { userID ? <Private/> : <Public />
      }

    </>
  )
}

export default App
