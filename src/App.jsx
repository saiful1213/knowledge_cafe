import { useState } from "react"
import Blogs from "./components/Blogs/Blogs"
import Bookmarks from "./components/Bookmarks/Bookmarks"
import Header from "./components/Header/Header"

function App() {
  const [readTime, setReadTime] = useState(0);
  const [bookMarks, setBookMarks] = useState([]);

  const handleReadTime = (time, id) => {
    setReadTime(readTime + time);
    const remaining = bookMarks.filter(bookMark => bookMark.id !== id);
    setBookMarks(remaining);
  }

  const handleBookMark = blogs => {
    setBookMarks([...bookMarks, blogs]);
  }

  return (
    <div className="max-w-7xl mx-auto py-2">
      <Header></Header>
      <div className="grid md:grid-cols-12 gap-6 py-6">
        <div className="md:col-span-8">
          <Blogs handleReadTime={handleReadTime} handleBookMark={handleBookMark}></Blogs>
        </div>
        <div className="md:col-span-4">
          <Bookmarks readTime={readTime} bookMarks={bookMarks}></Bookmarks>
        </div>
      </div>
    </div>
  )
}

export default App
