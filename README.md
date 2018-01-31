This app is for making a list. The idea was that when a person is looking to get a dog they do research on different breeds. Some of the things they look for are the gender and how big they get. This app is supposed to help keep track of the potential dog breeds a user is thinking of gettting. To add to the list you need to add breed, gender, weight, height. The user is also able to modify a list item and add new ones as well as delete one they don't want on their list anymore.

Technologies used:

In this project, for the front end, I used JQuery, CSS, HTML, Ajax. For the back end I used Ruby and Ruby on rails.

Unsolved 'problems':

One of the features I wanted to add was that when you inupt the ID to update an item on the list, that all the fields would populate with the data from that id. This way the user wouldn't have to input all the fields allover again and instead could just change those they wanted. As of now I haven't been able to do this. Also merging some branches got a bit confusing.

User stories

As a user I would like to be able to add things to the list
As a user I would like to be able to see the full list
As a user I would like to see individual items in the list
As a user I would like to be able to update list items
As a user I would like to remove items from the list

Wireframe: https://git.generalassemb.ly/storage/user/8896/files/30199d0a-020f-11e8-84ea-60433aab948b

Challenges:

One of the challenges I faced in this project was trying to figure out which like to use for development and for production. When I did figure it out the next challenge was getting it to work. I would dry a few times to sign in and sign up and it would not work. After consilting with a collegue we realized that we had to hace our rails server running in order to do any of these 'events'.

Then next challenge I had was trying to make a POST to the database to create a new list item for that user. I wasn't sure what the issue was so i had to go through all the files for that create action. Then I saw that in the iput fields I had breed-list[breed]. I thought thats who it had to be listen but then thought thats not the name of my table. So I tried breed_lists and that didn't work either. Then I tried it without the 's' and it worked. I realized that this is like the JSON response the api is looking for.

The other challenge I had was trying to get modals to work. This was the first time I tried to use them ina project and I was unsure of how to use them effectively. I was trying to get the modal to close by itself when the user clicked submit but as of now I have not gotten it to work.

Front-end deployed link: https://mimasofia.github.io/Breed-list-frontend/
Front-end repo link: https://github.com/mimasofia/Breed-list-frontend

Back end api link to repo: https://github.com/mimasofia/Breed-list-api
Api heroku app site: https://boiling-garden-37068.herokuapp.com/
