type Props = {
  className?: string,
  children: React.ReactNode
}

const Wrapper: React.FC<Props> = ({ className, children }) => (
  <div className={`max-w-[1440px] px-4 w-full min-w-0 mx-auto ${className ? className : ""}`}>
    {children}
  </div>
)

export default Wrapper;
