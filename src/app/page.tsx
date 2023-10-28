import Image from 'next/image'
import styles from './page.module.css'
import '../../node_modules/spectre.css/dist/spectre.css'

export default function Home() {
  return (
    <div className='hero paper-back' style={{ height: '100vh' }}>
      <div className='hero-body'>
        <div className='container m-auto'>
          <h1 style={{ fontFamily: 'august-script', fontSize: '32px'}}>Andrea e Roberta</h1>
        </div>
      </div>
    </div>

  )
}
