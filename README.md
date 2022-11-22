## Single page react flow

1. user receives empty html with js tag
2. user loads js from js tag(<script>)
3. js runs, starts fetchinh data and creating page
4. data returns, js finishes remdering page
complete page with correct html

Because the server isn't generate html per request on the first request, server doesnt know what you want it just handing them an html page and from there the html can load the js and then from js it will figure out what it's actually meant to be doing and all those step occur on the client device before render the correct page

### The goald of next js was to prevent this (SPA)

Nextjs data flow
when user request the page, depends on how you have things setup in nextjs

1. Next server get request, runs getServerSideProps(the function is server code that runs when a user requests the page so if I request a page)
2. React runs on server using properties from getServerSideProps()(this means that the actual page on the html has the information. it is run and generated on the server Side the server then sends correct html to user based on what react code render )
3. Server sends correct html to user
4. user loads html then load js to "catch up" to what server rendered

the catch up is very important piece(theo y hieu cua minh la server se render tu dau so 0 thi client muon thay doi tang len so 1.. )

the main benefit here of nextjs specefically is that teh correct data is on the page when it renders for the user in the first time you dont have the blank pop in that 


### Some intro
next-env.d.ts will load some type of nextjs
tsconfig include will compiler all the ts and tsx files
**.d.ts is global types

TS recommend to use Interface over Types when possible

declaration merging only for interface

### nextjs
nextjs will be using function and getStaticProps, this function will provide me some data through the props, and data will be provided at the  build time

`InferGetStaticPropsType<typeof getStaticProps>` this statement will provide type of props

We using both of tailwindcss and postcss

tailwindcss is forcus on component

postcss is tool for transforming css with javascript

css --> postcss --> parse --> tailwindcss --> plug in2 --> plug in 3 --> stringify --> css