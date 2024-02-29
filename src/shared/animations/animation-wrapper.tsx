import { motion } from 'framer-motion'

type AnimationWrapperProps = {
  children: React.ReactNode
  animation: any
  className?: any
}

export function AnimationWrapper(props: AnimationWrapperProps) {
  const { animation, children, ...rest } = props
  return (
    <motion.div {...animation} {...rest}>
      {' '}
      {children}
    </motion.div>
  )
}
