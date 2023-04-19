import { storyblokEditable } from '@storyblok/react'
import Link from 'next/link'
import React from 'react'

const ImageLink = ({blok}) => (
      <Link href={blok?.link?.cached_url} {...storyblokEditable(blok)}>
            <img src={blok?.image?.filename}></img>
      </Link>
  )

export default ImageLink
