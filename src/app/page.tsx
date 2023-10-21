import Image from 'next/image'
import styles from './page.module.css'
import '../../node_modules/spectre.css/dist/spectre.css'

export default function Home() {
  return (
    <div className='container'>
      <div className='columns'>
        <div className='column col-6' style={{background: 'blue'}}>Six</div>
        <div className='column col-3' style={{background: 'yellow'}}>Three</div>
        <div className='column col-3' style={{background: 'green'}}>Three</div>
      </div>
    </div>
  )
}
