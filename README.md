This is website use file system for fetching data from api which is not convinient for seo beacuse it does not generate html page and not send content with html to the browser

So, when social media bots etc search krte h to unhe kuch milta nhi h

This problem is solved by using pre-rendering in which we content is also available with html

Two types of pre-rendering
1. static generatin - In this files are generated at build time only so uf we did any changes in the it will not reflect on the broweser
for that we have redploy or rebuild

2. server-side rendering (recommended) - In this client send the request to the server and it will generate html pages on every request
In this data is reflected on every request.