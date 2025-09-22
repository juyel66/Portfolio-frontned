"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ArrowRight } from "lucide-react"

type TBlog = {
  _id: string
  image: string
  title: string
}

type TBlogProp = {
  blog: TBlog
}

const BlogCard = ({ blog }: TBlogProp) => {
  const { _id, image, title } = blog
  const [isHovered, setIsHovered] = useState(false)



  return (
    <div
      className="w-full overflow-hidden rounded-xl bg-gray-800/50 shadow-lg transition-all duration-300 hover:bg-gray-800 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container */}
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={`Cover image for ${title}`}
          fill
          className={`object-cover transition-transform duration-500 ${isHovered ? "scale-105" : "scale-100"}`}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="mb-3 text-xl font-bold text-white line-clamp-2">{title}</h3>

        <Link
          href={`/blog/${_id}`}
          className="group inline-flex items-center text-gray-300 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-800"
        >
          <span>Read more</span>
          <ArrowRight
            className={`ml-1.5 h-4 w-4 transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`}
          />
        </Link>
      </div>
    </div>
  )
}

export default BlogCard
