'use client'
import { CardRoot, GraphicsRoot } from '@app/components'
import { AnimationWrapper, animations } from '@app/shared'

export function DestinyRegion() {
  return (
    <AnimationWrapper animation={animations.moveLeft}>
      <CardRoot.CardWrapper className="p-4 gap-y-2 border border-gray-300">
        <CardRoot.CardTitle className="font-semibold text-xl text-gray-600 my-2">
          Destinatários por Região.
        </CardRoot.CardTitle>
        <CardRoot.CardContent>
          <GraphicsRoot.Bar />
        </CardRoot.CardContent>
      </CardRoot.CardWrapper>
    </AnimationWrapper>
  )
}
