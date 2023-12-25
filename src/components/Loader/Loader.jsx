import { ThreeDots } from 'react-loader-spinner'
import css from "./Loader.module.css"

export const Loader = () => {
  return (
    <div className={css.loaderWrapper}><ThreeDots
   visible={true}
  height="80"
  width="80"
  color="#FFA500"
  radius="9"
  ariaLabel="three-dots-loading"

       
  /></div>)
    
}