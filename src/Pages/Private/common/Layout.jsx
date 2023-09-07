import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (

    //zone de raffraichissement (chargement des composant de la route)
    <Outlet/>
  )
}

export default Layout