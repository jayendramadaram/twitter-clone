import React from 'react'
import { IconType } from 'react-icons'
interface Props {
  Icons: IconType
  title: string
}
export default function Side({ Icons, title }: Props) {
  return (
    <div className="duration-30000  group flex max-w-fit cursor-pointer items-center space-x-3 rounded-full py-3  px-3 transition-all hover:bg-gray-800">
      <Icons className="h-7 w-7" />
      <p className="hidden group-hover:text-twitter md:inline-flex">{title}</p>
    </div>
  )
}
