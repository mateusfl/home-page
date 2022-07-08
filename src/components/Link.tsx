interface linkProps {
  name: String
  emoji?: String
  url: string
}

export function Link(props: linkProps) {
  return (
    <a
      className="bg-gray-800 w-1/2 text-center rounded-lg py-1 mb-4 text-gray-100 hover:bg-gray-500 transition-colors"
      href={props.url}
    >
      {props.emoji} {props.name}
    </a>
  )
}
