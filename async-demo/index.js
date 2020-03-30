console.log('before');
console.log('after');

const user = getUser(1, (user) => {
  console.log(user);
  getRepos(user.username, (repos) => {
    console.log(repos);
  })
});

function getUser(id, callback) {
 setTimeout(() => {
    console.log('fetching data....');
    callback( { id, username: 'Wayne'} );
  }, 1000);
}

function getRepos( username, callback ) {
  setTimeout(() => {
    console.log('getting repos....');
    if( username === 'Wayne' ) callback(['repo1', 'repo2', 'repo3'])
  })
}