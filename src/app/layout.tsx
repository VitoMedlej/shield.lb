import Navbar from '@/Components/Navbar/Navbar'
import '../Styles/Styles.css'
import '../Styles/qty.css'
import Footer from '@/Components/Footer/Footer'
import Sidebar from '@/Components/Sidebar/Sidebar'
import ScrollToTop from '@/Components/ScrollToTop/ScrollToTop'
import QuickCart from '@/Components/Shared/QuickCart/QuickCart'
import ContextWrapper from '@/context/Contexts'

export const metadata = {
    title: 'DIY Crafts: Sparkle with Diamond Painting Supplies in Lebanon',
    description: `Explore the world of creative expression with diamond painting! Discover our exclusive collection of DIY crafts that combine relaxation and self-expression. Unleash your creativity and create breathtaking masterpieces with our high-quality diamond painting kits`,
    icons: {
        icon: `https://ucarecdn.com/14b57f62-b549-4e2f-8685-1bc72625ecc8/conslogo.PNG`
    }
}

export default function RootLayout({children} : {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;400;500;700&family=Oxygen:wght@300;400&display=swap" rel="stylesheet"/>
            </head>

            <body className='relative'>

                <ContextWrapper>
                    <Navbar/>
                    <Sidebar cates={undefined}/>
                    <QuickCart/>
                    <ScrollToTop/>
                    <main >

                     {children}
                    </main>
                </ContextWrapper>
                <Footer/>
            </body>
        </html>
    )
}
