
import FooterContent from '../footer/footerContent/FooterContent';
import Header from '../header/Header';

type LayoutProps ={
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children:any;
}
export default function Layout({children}:LayoutProps) {
  return (
    <div>
      <Header />
      {children}
      {/* <FooterContent /> */}
    </div>
  )
}
