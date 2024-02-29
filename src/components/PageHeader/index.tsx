type PageHeaderProps = {
  title: string
  description: string
}

export function PageHeader(props: PageHeaderProps) {
  const { title, description } = props
  return (
    <div className="w-full flex flex-col border border-b-gray-300 ">
      <h3 className="text-2xl font-bold italic gap-y-2 text-gray-600 ">
        {' '}
        {title}{' '}
      </h3>
      <p className="text-gray-600 my-1 pb-2 font-light text-sm">
        {' '}
        {description}
      </p>
    </div>
  )
}
