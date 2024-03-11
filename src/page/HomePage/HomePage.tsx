import BookCard from '../../components/BookCard/BookCard'
import Subscribe from '../../components/Subscribe/Subscribe'
import './HomePage.scss'

function HomePage() {

  return (
    <>
       <div className="homePage_section">
            <div className="homePage_element">
                <h1 className='homePage_title'>NEW RELEASE BOOKS</h1>
                <div className="homePage_item_list">
                    <div className="homePage_item">
                        <BookCard/>
                    </div>
                    <div className="homePage_item">
                        <BookCard/>
                    </div>
                    <div className="homePage_item">
                        <BookCard/>
                    </div>
                    <div className="homePage_item">
                        <BookCard/>
                    </div>
                    <div className="homePage_item">
                        <BookCard/>
                    </div>
                    <div className="homePage_item">
                        <BookCard/>
                    </div>
                    <div className="homePage_item">
                        <BookCard/>
                    </div>
                    <div className="homePage_item">
                        <BookCard/>
                    </div>
                    <div className="homePage_item">
                        <BookCard/>
                    </div>
                    <div className="homePage_item">
                        <BookCard/>
                    </div>
                    <div className="homePage_item">
                        <BookCard/>
                    </div>
                    <div className="homePage_item">
                        <BookCard/>
                    </div>
                </div>
                
            </div>
       </div>

       <Subscribe />
    </>
  )
}

export default HomePage