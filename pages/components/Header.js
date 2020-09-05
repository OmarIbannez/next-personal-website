import Link from 'next/link'

export default function Header() {
  return (
    <>
      <header className="blog-header py-3">
        <div className="row flex-nowrap justify-content-between align-items-center">
          <div className="col-12 text-center">
            <h1>
              <Link href="/">
                <a className="text-dark text-size-13">Omar Ibañez</a>
              </Link>
            </h1>
          </div>
        </div>
      </header>
      <div className="nav-scroller py-1 mb-2">
        <nav className="nav d-flex justify-content-between">
          <Link href="/">
            <a className="p-2 text-muted">Home</a>
          </Link>
          <a className="p-2 text-muted" target="_blank" href="resume.pdf">Resume</a>
          <Link href="tm">
            <a className="p-2 text-muted">Talks &amp; Mentorship</a>
          </Link>
          <a className="p-2 text-muted" target="_blank" href="https://github.com/omaribannez">Projects</a>
          <Link href="books">
            <a className="p-2 text-muted">Books</a>
          </Link>
        </nav>
      </div>
    </>
  )
}