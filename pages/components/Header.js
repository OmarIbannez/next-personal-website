import Link from 'next/link'

export default function Header() {
  return (
    <>
      <header class="blog-header py-3">
        <div class="row flex-nowrap justify-content-between align-items-center">
          <div class="col-12 text-center">
            <h1>
              <Link href="/">
                <a class="text-dark text-size-13">Omar Ibañez</a>
              </Link>
            </h1>
          </div>
        </div>
      </header>
      <div class="nav-scroller py-1 mb-2">
        <nav class="nav d-flex justify-content-between">
          <Link href="/">
            <a class="p-2 text-muted">Home</a>
          </Link>
          <a class="p-2 text-muted" target="_blank" href="resume.pdf">Resume</a>
          <Link href="tm">
            <a class="p-2 text-muted">Talks &amp; Mentorship</a>
          </Link>
          <a class="p-2 text-muted" target="_blank" href="https://github.com/omaribannez">Projects</a>
          <a class="p-2 text-muted" target="_blank" href="https://www.goodreads.com/omaribannez">Books</a>
        </nav>
      </div>
    </>
  )
}