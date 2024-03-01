import { AnimationWrapper, animations } from '@app/shared'
import { CardRoot, GraphicsRoot } from '@app/components'
export function Report() {
  return (
    <AnimationWrapper animation={animations.moveTop}>
      <CardRoot.CardWrapper className="p-4 gap-y-2 border border-gray-300">
        <CardRoot.CardTitle className="font-semibold text-xl text-gray-600 my-2">
          Problemas Relatados
        </CardRoot.CardTitle>
        <CardRoot.CardContent>
          <GraphicsRoot.Area />
        </CardRoot.CardContent>
      </CardRoot.CardWrapper>
    </AnimationWrapper>
  )
}
