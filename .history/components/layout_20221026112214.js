import Header from './header';
import Footer from './footer';

export default function Layout({ children }) {
    return (
        <div className>
            <Header/>
            <div>{children}</div>
            <Footer/>
        </>
    )
}