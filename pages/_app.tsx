/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'

const MyApp: React.FC<AppProps> = function ({
  Component,
  pageProps,
}: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
