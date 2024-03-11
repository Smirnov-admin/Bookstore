import BookCard from '../BookCard/BookCard'
import './PopularBooks.scss'

function PopularBooks() {

  return (
    <>
        <section className='popularBooks_section'>
            <div className="popularBooks_elements">
                <h2 className='popularBooks_elements_title'>POPULAR BOOKS</h2>
                <div className="popularBooks_item_list">
                    <div className="popularBooks_item">
                        <BookCard/> 
                    </div>
                    <div className="popularBooks_item">
                        <BookCard/> 
                    </div>
                    <div className="popularBooks_item">
                        <BookCard/> 
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default PopularBooks