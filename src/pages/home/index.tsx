import './styles.css'
import  avatar  from '../../assets/home/avatar-me.png'

function Home() {
  return (
    <>
      <section id='home-container'>
        <h1 className='page-title home'>Home</h1>

        <div id='inner-container'>
          <div className='box-image'>
            <img src={avatar} alt="" className='avatar-image'/>
          </div>
          <div className='box-info'>
            
            <h1>Vítor Lougon</h1>
            <h2>I'm a Software Enginer</h2>

          </div>
        </div>
      </section>
    </>
  )
}

export default Home;