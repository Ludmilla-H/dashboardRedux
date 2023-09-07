import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { logout } from '../../commonjs/auth'
import NoMatch from '../NoMatch'
import Category from './Category'
import Layout from './common/Layout'
import Navbar from './common/Navbar'
import NavGauche from './common/NavGauche'
import Home from './Home'
import Question from './Question'

const Private = () => {
    return (
        <>
        <NavGauche/>
            <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
            <Navbar/>


                <div className="px-6 pt-6 2xl:container">
                    {/* Container */}

                    <Routes>
                        <Route path="/" element={< Layout/>}>
                            <Route index element={<Home/>}/>
                            <Route path="/category" element={<Category/>}/>
                            <Route path="/question" element={<Question/>}/>
                            <Route path='*' element={<NoMatch/>}/>
                        </Route>
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default Private