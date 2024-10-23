import PropTypes from "prop-types";

const Bookmarks = ({ readTime, bookMarks }) => {

  return (
    <div>
      <button className="text-[#6047EC] text-2xl font-bold py-5 px-12 border border-[#6047EC] rounded-lg bg-[#6047ec1a]">
        Spent time on read : {readTime} min
      </button>
      <div className="mt-6 p-7 bg-[#1111110d] rounded-lg">
        <h2 className="text-[#111] text-2xl font-bold">Bookmarked Blogs : {bookMarks?.length}</h2>
        {
          bookMarks.map((bookMark, idx) => (
            <div className="my-4 bg-[#fff] rounded-lg p-4" key={idx}>
              <h3 className="text-[#111] text-lg font-semibold">{bookMark.blog_title}</h3>
            </div>
          ))
        }
      </div>
    </div>
  )
}

Bookmarks.propTypes = {
  readTime: PropTypes.number.isRequired,
  bookMarks: PropTypes.array.isRequired,
}

export default Bookmarks;