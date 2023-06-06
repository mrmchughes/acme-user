const render = ({ userList, hash, users}) => {
    const html = users
    .map((user, index) => {
      return `<li>
        <a href='#${index}'>${user.username}</a>
        ${parseInt(hash) === index ? `<pre>${ JSON.stringify(user, null, 2) }</pre>` : ''}
      </li>`;
    })
    .join("");
  userList.innerHTML = html;
};      

module.exports = render;