import { ReactComponent as Logo } from '../assets/images/logo.svg';
import { useAppSelector } from '../hooks/useRedux';
import { selectStatus } from '../store/slices/movieSlice';

export default function Loader() {
  
  /** @const {TLoadingStatus} movieLoadingStatus The status of movie slice's loading */
  const movieLoadingStatus = useAppSelector(selectStatus);

  // -----------------------------------------

  return (
    <div className={`${!(movieLoadingStatus == 'idle' || movieLoadingStatus == 'loading') ? 'hidden' : ''}  z-50 fixed inset-0 flex justify-center items-center bg-dark`}>
      <Logo />
    </div>
  )
}