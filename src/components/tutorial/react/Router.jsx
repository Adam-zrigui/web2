import React from 'react'
import { div, h1, h4, li, p, ul } from '../../../data'
import Side from '../../EveryComponent/Side'
import route from '../../../assets/route.png'
import routes from '../../../assets/routes.png'
export default function Router() {
  return (
    <div className={div}>
        <Side />
        <div className="">
            <h1 className={h1}>React Router</h1>
<p className={p}>Create React App doesn't include page routing.</p>
<p className={p}>React Router is the most popular solution.</p>
<h4 className={h4}>Add React Router</h4>
<p className={p}>To add React Router in your application, run this in the terminal from the root directory of the application:</p>
<img src={route} alt="" className={ul} />
<h4 className={h4}>Folder Structure</h4>
<p className={p}>To create an application with multiple page routes, let's first start with the file structure.</p>
<p className={p}>Within the src folder, we'll create a folder named pages with several files:</p>
<p className={p}>src\pages\:</p>
<ul className={ul}>
    <li className={li}>Layout.js</li>
    <li className={li}>Home.js</li>
    <li className={li}>Blogs.js</li>
    <li className={li}>Contact.js</li>
    <li className={li}>NoPage.js</li>
</ul>
<p className={p}>Each file will contain a very basic React component.</p>
<h4 className={h4}>Basic Usage</h4>
<p className={p}>Now we will use our Router in our index.js file.</p>
<img src={routes} alt="" className={ul} />
<h4 className={h4}>Example Explained</h4>
<p className={p}>We wrap our content first with &lt;BrowserRouter&gt;.</p>
<p className={p}>Then we define our &lt;Routes&gt;. An application can have multiple &lt;Routes&gt;. Our basic example only uses one.</p>
<p className={p}>&lt;Route&gt;s can be nested. The first &lt;Route&gt; has a path of / and renders the Layout component.</p>
<p className={p}>The nested &lt;Route&gt;s inherit and add to the parent route. So the blogs path is combined with the parent and becomes /blogs.</p>
<p className={p}>The Home component route does not have a path but has an index attribute. That specifies this route as the default route for the parent route, which is /.</p>
<p className={p}>Setting the path to * will act as a catch-all for any undefined URLs. This is great for a 404 error page.</p>
        </div>
    </div>
  )
}
