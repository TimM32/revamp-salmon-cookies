
import Header from '@/components/layout/header';
import Footer from 'components/layout/footer';


export default function Layout() {
  return (
    <>
    <Header/>
      <div className="w-full bg-white dark:bg-black">
        <div className="mx-8 max-w-2xl py-20 sm:mx-auto">
        </div>
      </div>
      <Footer />
    </>
  );
}