import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import GitHub from "../icons/github"
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4" style={{ "backgroundColor": "rgb(51 51 51)"}}>
      <div className="max-w-4xl w-full space-y-12 text-center">
        <div className="relative w-32 h-32 mx-auto">
          <StaticImage
            src="../images/icon.png"
            alt="Zylo Logo"
            className="object-contain" />
        </div>

        <div className="space-y-6">
          <p className="text-2xl md:text-3xl font-medium text-[#E0E0E0]">
            Zylo
          </p>
          <p className="text-lg md:text-xl text-[#E0E0E0] max-w-2xl mx-auto">
            A modern Discord library...coming to your <kbd>package.json</kbd> shortly.
          </p>
        </div>

        <div className="pt-8">
          <a
            href="https://github.com/zylojs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-black bg-[#E65100] hover:bg-[#FF8A50] transition-colors rounded-lg font-medium"
          >
            <span className="w-5 h-5"><GitHub /></span>
            <span>Join the Discussion</span>
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 text-[#E0E0E0] text-sm">
        © {new Date().getFullYear()} Zylo. All rights reserved.
      </footer>
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
