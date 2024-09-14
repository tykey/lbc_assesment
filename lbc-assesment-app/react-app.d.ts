declare module '*.svg' {
  import * as React from 'react'
  import { jsx } from '@emotion/react'

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >

  const src: string
  export default src
}

declare module '*.png'
declare module '*.jpg'
declare module '*.ttf'
