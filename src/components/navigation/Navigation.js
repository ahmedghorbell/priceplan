import React from 'react'
import './Navigation.css'
import { UilSignin, UilSignout} from '@iconscout/react-unicons'

const Navigation = () => {
  return (
  <div>
   <ul class="menu cf">
<li><a href="https://www.blogger.com/blogger.g?blogID=1719501309664700552">Home</a></li>
<li>
        <a href="https://www.blogger.com/blogger.g?blogID=1719501309664700552">Account</a>
        <ul class="submenu">
<li><a href="https://www.blogger.com/blogger.g?blogID=1719501309664700552">Sign in <UilSignin /></a></li>
<li><a href="https://www.blogger.com/blogger.g?blogID=1719501309664700552">Sign up <UilSignout /></a></li>
</ul>
</li>
<li><a href="https://www.blogger.com/blogger.g?blogID=1719501309664700552">About</a></li>
<li><a href="https://www.blogger.com/blogger.g?blogID=1719501309664700552">Terms</a></li>
</ul>
  </div>
  )
}

export default Navigation