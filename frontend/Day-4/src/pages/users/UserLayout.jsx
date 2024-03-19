import PropTypes from 'prop-types';
import NavBar from "../../components/user/NavBar"
import Footer from "../../components/user/Footer"

function UserLayout({children}) {
    return (

        <div className="flex flex-col min-h-screen no-scrollbar overflow-y-auto"> 
            <header>
                <NavBar />
            </header>
            <main className="flex-grow">
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

UserLayout.propTypes = {
    children: PropTypes.node.isRequired
};

export default UserLayout;