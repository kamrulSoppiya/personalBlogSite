import style from '../header/header.module.css';
export default function Logo() {
  return (
    <div className={style.logo}>
        <h2 style={{display:'flex', fontSize:'30px', alignItems:'center'}}>Dasteen. <span style={{color:'#004658', fontSize:'32px'}}>Blog</span></h2>
    </div>
  )
}
