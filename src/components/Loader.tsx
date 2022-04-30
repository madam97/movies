import { ReactComponent as Logo } from '../assets/images/logo.svg';

type LoaderProps = {
  show: boolean
}

export default function Loader({ show }: LoaderProps) {
  return (
    <div className={`${!show ? 'hidden' : ''}  z-50 fixed inset-0 flex justify-center items-center bg-dark`}>
      <Logo />
    </div>
  )
}