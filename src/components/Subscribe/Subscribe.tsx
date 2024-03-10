import './Subscribe.scss'

function Subscribe() {

  return (
    <>
        <section className='subscribe_section'>
                <div className="subscribe_information">
                    <div className="subscribe_information_titleAndDescription">
                        <h2 className="subscribe_title">SUBSCRIBE TO NEWSLETTER</h2>
                        <p className="subscribe_description">Be the first to know about new IT books, upcoming releases, exclusive offers and more.</p>
                    </div>
                    <div className="subscribe_elements_input">
                        <input type="text" className='subscribe_input_text' placeholder='Your email'/>
                        <button className='subscribe_Btn'>Subscribe</button>
                    </div>
                </div>
        </section>
    </>
  )
}

export default Subscribe