"use client"
import React from 'react'
import Confetti from 'react-confetti'
import useWindowSize from '~/hooks/use-window-size'

interface Props{
    name: string;
}

export default function Celebrate({ name }: Props) {
    
  const { width, height } = useWindowSize()
  const message = `Happy Birthday ${name}!`

  return (
    <section className='w-screen h-screen fixed inset-0'>
        <h1 className='w-full px-2 font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  font-bold leading-tight text-center'>{message}</h1>
        <Confetti
            width={width}
            height={height}
        />
    </section>
    
  )
}