import style from '../../assets/css/module/layout.module.css';

type LayoutProps ={
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children:any;
}
export default function Layout({children}:LayoutProps) {
  return (
    <div className={style.container}>
          {children}
    </div>
  )
}
