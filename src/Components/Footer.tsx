
const Footer = () => {
    return (
        <>
            <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
                <aside>
                    <a onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="btn">go up ^</a>
                    <p>Copyright © {new Date().getFullYear()} <a class="link" rel="noopener noreferrer" href="https://github.com/neosnakex34" target="_blank">neoSnakex34</a> - artwork by <a class="link" rel="noopener noreferrer" target="_blank" href="https://smony.artstation.com/">Smony</a></p>
                </aside>
            </footer>
        </>
    );
};

export default Footer;