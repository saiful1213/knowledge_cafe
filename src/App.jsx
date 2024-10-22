import Blogs from "./components/Blogs/Blogs"
import Bookmarks from "./components/Bookmarks/Bookmarks"
import Header from "./components/Header/Header"

function App() {

  return (
    <div className="max-w-7xl mx-auto py-2">
      <Header></Header>
      <div className="grid md:grid-cols-12 gap-6 py-6">
        <div className="md:col-span-8">
          <Blogs></Blogs>
        </div>
        <div className="md:col-span-4">
          <Bookmarks></Bookmarks>
        </div>
      </div>
    </div>
  )
}

export default App
