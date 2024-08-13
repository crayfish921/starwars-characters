import { FC, PropsWithChildren } from 'react'

export const BaseLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="h-full grid place-items-center p-1 sm:p-2 md:p-4 transition-all gap-3">
      {children}
    </div>
  )
}
