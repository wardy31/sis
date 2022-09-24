import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <div class="bg-transparent py-6 ">
        <div class="container mx-auto">
          <div>
            <ul class="flex justify-end items-center gap-6">
              <Link to="/manage"><li class="text-indigo-900  font-medium hover:text-indigo-600">Manage Student</li></Link>
              <Link to="/offers"><li class="text-indigo-900 font-medium hover:text-indigo-600">University Offers</li></Link>
              <Link to="/"><li class="text-indigo-900  font-medium"><button class="bg-indigo-900 hover:bg-indigo-800 text-neutral-50 rounded-md px-6 py-1">Logout</button></li></Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar