import './App.css';
import garfish from 'garfish';

function App() {
  return (
    <div id="sub-app" className="App">
    </div>
  );
}

const entry = 'https://www.test.com/entry.html';

garfish.loader.setLifeCycle({
  fetch: function(url) {
    if (url === entry) {
      return Promise.resolve(new Response(`
<html>
  <body>
  <svg xmlns:xlink="http://www.w3.org/1999/xlink"></svg>
  </body>
</html>
      `, {
        status: 200,
        headers: {
          'content-type': 'text/html',
        },
      }));
    }
  },
})

garfish.run({
  domGetter: '#sub-app',
  apps: [{
    name: 'subApp',
    entry: entry,
    activeWhen: '/',
  }]
})

export default App;
