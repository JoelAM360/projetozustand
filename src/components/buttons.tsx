// type Props = { name: string; placeholder: string };
// export function TextField({ name, placeholder }: Props

type Props = { name: string}
export default function Buttons({name} : Props) {
  return (
    <div>
        <button>{name}</button>
        <button>{name}</button>
        <button>{name}</button>
        <button>{name}</button>
        <button>{name}</button>
    </div>
  )
}
