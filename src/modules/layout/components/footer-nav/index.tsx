"use client"

import clsx from "clsx"
import { useCollections } from "medusa-react"
import Link from "next/link"
import CountrySelect from "../country-select"
import Image from "next/image"

const FooterNav = () => {
  const { collections } = useCollections()

  return (
    <div className="flex flex-col pt-16 pb-8 content-container gap-y-8">
      <div className="flex flex-col items-start justify-between gap-y-6 xsmall:flex-row">
        <div>
          <Image src="/images/logo3.png" alt="logo" width={150} height={150} />
        </div>
        <div className="grid grid-cols-2 text-small-regular gap-x-16">
          <div className="flex flex-col gap-y-2">
            <span className="text-base-semi">Collections</span>
            <ul
              className={clsx("grid grid-cols-1 gap-y-2", {
                "grid-cols-2": (collections?.length || 0) > 4,
              })}
            >
              {collections?.map((c) => (
                <li key={c.id}>
                  <Link href={`/collections/${c.id}`}>
                    <a>{c.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-center gap-y-4 xsmall:items-center xsmall:flex-row xsmall:items-end xsmall:justify-between">
        <span className="text-gray-500 text-xsmall-regular">
          © Copyright 2022 PAVI MARIE
        </span>
        <div className="min-w-[316px] flex xsmall:justify-end">
          <CountrySelect />
        </div>
      </div>
    </div>
  )
}

export default FooterNav
