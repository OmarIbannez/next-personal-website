import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faGoodreads, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer class="footer mt-auto py-3">
      <div class="container text-center">
        <a className="m-1" target="blank" href="https://github.com/omaribannez/"><FontAwesomeIcon icon={faGithub} size="lg" /></a>
        <a className="m-1" target="blank" href="https://twitter.com/OmarIbannez/"><FontAwesomeIcon icon={faTwitter} size="lg" /></a>
        <a className="m-1" target="blank" href="https://www.goodreads.com/omaribannez/"><FontAwesomeIcon icon={faGoodreads} size="lg" /></a>
        <a className="m-1" target="blank" href="https://www.linkedin.com/in/omaribannez/"><FontAwesomeIcon icon={faLinkedinIn} size="lg" /></a>
      </div>
    </footer>
    )
}