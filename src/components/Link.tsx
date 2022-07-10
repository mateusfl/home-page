interface linkProps {
  name: String
  emoji?: String
  url: string
}

export function Link(props: linkProps) {
  return (
    <a
      className="w-1/2 h-8 bg-[#2500aa] text-center rounded-lg py-1 mb-4 text-gray-100
        hover:bg-[#150061] hover:w-[52%] hover:h-9 hover:text-lg hover:font-semibold
        focus:bg-[#150061] focus:w-[52%] focus:h-9 focus:text-lg focus:font-semibold
        transition-all"
      href={props.url}
    >
      {props.emoji} {props.name}
    </a>
  )
}
