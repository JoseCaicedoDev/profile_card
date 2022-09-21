import './App.css';
import { FollowTheme } from './components/follow/follow';
import imagenPerson from './components/assets/image-victor.jpg'
import imageBg from './components/assets/bg-pattern-card.svg'
function App() {
  return (
    <>
    <section className='container'>
      <div className="card">
        <img className='card__iamge-bg' src={imageBg} alt="" />
        <img className='card__image-person' src={imagenPerson} alt="imagen Victor" />
        <div className='container__name'>
          <p className='card__name'>Victor Crest</p>
          <p className='card__age'>26</p>
        </div>
        <p className='card__country'>London</p>
        <div className='card__follow'>
          <FollowTheme number='80K' description='Followers' />
          <FollowTheme number='803K' description='Likes' />
          <FollowTheme number='1.4K' description='Photos' />
        </div>
      </div>
    </section>

    </>
  );
}

export default App;
