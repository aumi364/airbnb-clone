import Logo from '../assets/logo'
import Container from '../layouts/container'

type Props = {}

const Navbar = (props: Props) => {
    return (
        <div className="fixed w-full bg-white z-10 shdaow-sm">
            <div className="py-4 border-b-[1px]">
                <Container>
                    <div className="flex items-center justify-between gap-3 md:gap-0">
                        <Logo />
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Navbar
