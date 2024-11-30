Our website is made using node.js framework. If you are not familiar with node.js, you can follow this tutorial to run it https://code.visualstudio.com/docs/nodejs/nodejs-tutorial.
If you are, simply right-clicking the folder -> Open with vscode -> clicking on server.js -> Run and Debug -> Select node.js -> Openning http://localhost:3000/ on your browser will be good enough.

From there on the code is pretty straightforward. Simple click on the links and buttons on the screen to check the different pages.
- Main page: You can see some recommended activities, search for something, and go to detail event view, My account, Friends and My Bookings
- Search result page: Similar to the main page but here you can see the results of your search. Notice that search and recommendation AI algorithms are not implemented, this is just a sample
- My Account: This page will display simple user account information. It is not yet implemented since we are not yet using accounts in a database matter and was beyond the point of the study
- Friends: Here you can see the friends you have added to the app
- My Bookings: From here you can request a refund, access more event information, and access the schedule builder
- Schedule Builder: Here you can add and delete schedule items for that event you chose, as well as add friends to it. The actual "adding friends" doesn't do anything yet since again, we don't have a database server with accounts
