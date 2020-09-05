import Layout from './components/Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


function Books({ books }) {
  const booksStyle = {
    lineHeight: "1.2",
    flexdirection: "column",
    display: "grid",
    gridGap: "1rem",
    gridTemplateColumns: "repeat(auto-fill, minmax(12rem, 1fr))",
    margin: "4rem 0"
  }
  return (
    <Layout>
    <div style={booksStyle}>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </div>
    <div className="col text-center mb-5">
      <a className="btn btn-primary" href="#">Complete List</a>
    </div>
    </Layout>
  )
}

function Book({ book }) {
  const bookStyle = {
    display: "grid",
    gridTemplateColumns: "93px 4fr",
    gridGap: "1em",
  }
  const titleStyle = {
    WebkitLineClamp: "3",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    width: "6rem",
    color: "#747c84",
    margin: ".1rem 0"
  }
  const authorStyle = {
    color: "#747c84",
    fontWeight: "lighter",
    margin: "0"
  }
  const stars = []
  for (let i=0; i < book.rating; i++) {
    stars.push(<FontAwesomeIcon icon={faStar} size="sm" color="gold" transform="shrink-2" className="m-0 p-0" />)
  }
  return (
    <div key={book.id} style={bookStyle}>
      <a target="blank" href={book.link}>
      <img src={book.image_url} alt={book.title}></img>
      </a>
      <div>
        <p style={titleStyle}>{book.title}</p>
        <p style={authorStyle}>{book.author}</p>
        {stars}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const goodreads_key = process.env.GOODREADS_KEY
  const goodreads_user_id = process.env.GOODREADS_USER_ID
  const books = []
  const exclude_img = 'https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png'

  await fetch(`https://www.goodreads.com/review/list?v=2&id=${goodreads_user_id}&shelf=read&key=${goodreads_key}&per_page=200`)
  .then(res => res.text())
  .then(body => {
    var parseString = require('xml2js').parseString;
    parseString(body, function (err, res) {
      if (err) console.log(err);
      let bookList = res.GoodreadsResponse.reviews[0].review;
      for (let i=0; i < bookList.length; i++) {
        if (bookList[i].book[0].image_url[0] != exclude_img) {
          books.push({
            id: bookList[i].book[0].id[0],
            title: bookList[i].book[0].title_without_series[0],
            author: bookList[i].book[0].authors[0].author[0].name[0],
            image_url: bookList[i].book[0].image_url[0],
            link: bookList[i].book[0].link[0],
            rating: bookList[i].rating[0]
          })
        }
      }
    })
  }).catch(err => console.log(err));

  return {
    props: {
      books,
    },
  }
}

export default Books
