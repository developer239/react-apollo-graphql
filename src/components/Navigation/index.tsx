import React from 'react'
import { Link } from 'react-router-dom'
import { AuthButtons } from './AuthButtons'

export const Navigation = () => (
  <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <AuthButtons />
    </ul>
  </div>
)
