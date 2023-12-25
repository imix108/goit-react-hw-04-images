import css from './Button.module.css';

export const Button = ({onLoadMore}) => {
  return (

    <div className={css.buttonContainer}><button onClick={onLoadMore} className={css.button} type='button'>Load More</button></div>
    
  )
}


