import { FC, PropsWithChildren } from 'react'


export const BaseLayout: FC<PropsWithChildren> = ({ children }) => {
  return <div className='h-full grid-flow-col'>{children}</div>
}
