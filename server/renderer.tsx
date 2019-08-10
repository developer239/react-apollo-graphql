import React from 'react'
import express from 'express'
import { StaticRouter, StaticRouterContext } from 'react-router'
import ReactDOMServer from 'react-dom/server'
import { App } from '../src/app'

interface IParams {
  context: StaticRouterContext
  req: express.Request
}

export const renderReactApp = ({ context, req }: IParams) =>
  ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  )
