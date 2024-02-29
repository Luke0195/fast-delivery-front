'use client'
import { Icon } from '@app/components'
import { animations, AnimationWrapper } from '@app/shared'
import { motion } from '@app/libs'
import logo from '@app/assets/imgs/logo.svg'

export const Info = () => {
  return (
    <>
      <Icon width={120} height={40} alt="logo do fast-feet" src={logo} />
      <AnimationWrapper
        className="flex flex-col items-center"
        animation={animations.showOpacity}
      >
        <h2 className="my-2 text-white text-2xl font-bold  italic">
          <span className="text-primaryYellow font-semibold">Gerencie</span>{' '}
          suas encomendas com o <span className="text-primaryYellow">Fast</span>
          Feet
        </h2>
        <span className="text-white my-1">
          Faça seu login para gerenciar suas encomendas.
        </span>
      </AnimationWrapper>
    </>
  )
}
