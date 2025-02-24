import type { SVGProps } from "react"
import type React from "react"

const ChevronLeftIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M6.4375 13.5312L0.6875 7.53125C0.5625 7.375 0.5 7.1875 0.5 7.03125C0.5 6.84375 0.5625 6.65625 0.6875 6.5L6.4375 0.5C6.71875 0.1875 7.21875 0.1875 7.5 0.46875C7.8125 0.75 7.8125 1.25 7.53125 1.53125L2.28125 7.03125L7.53125 12.5C7.8125 12.7812 7.8125 13.2812 7.5 13.5625C7.21875 13.8438 6.71875 13.8438 6.4375 13.5312Z" fill="currentColor" />
    </svg>
)

export default ChevronLeftIcon;
