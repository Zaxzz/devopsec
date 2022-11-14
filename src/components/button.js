const Button = () => {
    return (
        <div>
            <div className="fixed z-40 navbar bg-blue drop-shadow-lg ">
  <div className="flex-1 text-black">
    <a className="btn btn-ghost normal-case text-xl">DevOpSecId</a>
  </div>
  <div className="flex-none text-black">
    <ul className="menu menu-horizontal p-0">
      <li><a className="hover:bg-transparent hover:underline">Home</a></li>
      <li tabIndex={0}>
        <a className="hover:bg-transparent hover:underline">
          About
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 bg-base-100">
          <li><a>Submenu 1</a></li>
          <li><a>Submenu 2</a></li>
        </ul>
      </li>
      <li><a className="hover:bg-transparent hover:underline">Our Program</a></li>
      <li><a className="hover:bg-transparent hover:underline">Team</a></li>
      <li><a className="hover:bg-transparent hover:underline">Faq</a></li>
      <li><a className="hover:bg-transparent hover:underline">Blog</a></li>
      <li><a className="hover:bg-transparent hover:underline">Login</a></li>
      <button className="btn bt-active opacity-50 text-white ">Sign Up</button>
    </ul>
  </div>
</div>
        </div>
    );
}

export default Button;