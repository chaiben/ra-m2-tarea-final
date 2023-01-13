import React, { useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { Body } from '../components/layout'
import { Main } from '../pages'

export const AppRoutes = (): JSX.Element => {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Body />}>
          <Route index element={<Main />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
