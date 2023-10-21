import Image from 'next/image'
import styles from './page.module.css'
import '../../node_modules/spectre.css/dist/spectre.css'

export default function Home() {
  return (
    <div className='hero hero-lg'>
      <div className='hero-body'>
        <div className='container'>
          <div className='columns'>
            <div className='column col-6' style={{ background: '#fdf7f5' }}>Six</div>
            <div className='column col-3' style={{ background: '#f8d8cd' }}>Three</div>
            <div className='column col-3' style={{ background: '#d1ae5b' }}>Three</div>
          </div>
        </div>
      </div>
    </div>

  )
}
