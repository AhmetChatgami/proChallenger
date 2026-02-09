import { Link } from "react-router"

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content p-10 mt-20">
            <div className="footer max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
                {/* Brand Section */}
                <aside className="max-w-xs">
                    <Link to='/'>
                    <h2 className="text-3xl font-bold text-primary mb-4">ProChallenger</h2></Link>
                    <p className="text-sm opacity-80 leading-relaxed">
                        The ultimate platform for modern contests. Show your skills, 
                        join the community, and win amazing prizes every day.
                    </p>
                </aside>

                {/* Quick Links */}
                <nav>
                    <h6 className="footer-title text-white opacity-100">Contests</h6>
                    <a className="link link-hover">Active Contests</a>
                    <a className="link link-hover">Leaderboard</a>
                    <a className="link link-hover">Past Winners</a>
                    <a className="link link-hover">Upcoming Events</a>
                </nav>

                {/* Support Section */}
                <nav>
                    <h6 className="footer-title text-white opacity-100">Support</h6>
                    <a className="link link-hover">Terms of Service</a>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Help Center</a>
                    <a className="link link-hover">Contact Us</a>
                </nav>

                {/* Newsletter */}
                <form>
                    <h6 className="footer-title text-white opacity-100">Newsletter</h6>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text text-neutral-content">Stay updated with latest news</span>
                        </label>
                        <div className="join">
                            <input
                                type="text"
                                placeholder="username@site.com"
                                className="input input-bordered join-item text-black" />
                            <button className="btn btn-primary join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </div>

            {/* Bottom Copyright */}
            <div className="border-t border-neutral-focus mt-10 pt-6 text-center text-sm opacity-60">
                <p>© {new Date().getFullYear()} - ProChallenger | Developed by AY. Ramadan</p>
            </div>
        </footer>
  )
}

export default Footer
