'use client'
import { CardRoot, GraphicsRoot } from '@app/components'
import { AnimationWrapper, animations } from '@app/shared'

export function Recipent() {
  return (
    <AnimationWrapper animation={animations.moveRight}>
      <CardRoot.CardWrapper className="p-4 gap-y-2 border border-gray-300">
        <CardRoot.CardTitle className="font-semibold text-xl text-gray-600 my-2">
          Resultado das Encomendas
        </CardRoot.CardTitle>
        <CardRoot.CardContent>
          <GraphicsRoot.Pie />
        </CardRoot.CardContent>
      </CardRoot.CardWrapper>
    </AnimationWrapper>
  )
}
