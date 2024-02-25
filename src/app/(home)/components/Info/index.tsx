'use client'
import { Logo } from '@app/components'
import { motion } from 'framer-motion'
import { animations } from '@app/shared'

export const Info = () => {
  return (
    <>
      <Logo />
      <motion.div
        className="flex flex-col items-center"
        {...animations.showOpacity}
      >
        <h2 className="my-2 text-white text-2xl font-bold italic">
          <span className="text-primaryYellow font-semibold">Gerencie</span>{' '}
          suas encomendas com o <span className="text-primaryYellow">Fast</span>
          Feet
        </h2>
        <span className="text-white my-1">
          Faça seu login para gerenciar suas encomendas.
        </span>
      </motion.div>
    </>
  )
}
