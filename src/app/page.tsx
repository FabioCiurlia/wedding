import Image from 'next/image'
import styles from './page.module.css'
import '../../node_modules/spectre.css/dist/spectre.css'

export default function Home() {
  return (
    <div className='container paper-back'>
      <div className='hero' style={{ height: '100vh' }}>
      <div className='hero-body'>
        <div className='container'>
          <h1 style={{ fontFamily: 'august-script', fontSize: '72px', color: 'var(--light-green)', textAlign: 'center'}}>Andrea e Roberta</h1>
          <div>
            <p style={{ textAlign: 'center' }}>ANNUNCIANO CON GIOIA<br/>
            IL LORO MATRIMONIO</p>
          </div>
        </div>
      </div>
    </div>
    </div>
    

  )
}
