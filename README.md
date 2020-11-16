Deployed sites: https://rocky-harbor-89349.herokuapp.com/
https://jasmineked.github.io/to-do-list-client/
API Repo: https://github.com/jasmineked/to-do-list-api
Client Repo: https://github.com/jasmineked/to-do-list-client
ERD: https://imgur.com/mI5b5kF

Organizing tasks with a list can make everything more manageable and make one feel grounded. Seeing a clear outline of what needs to get done will help you stay organized & mentally focused. With this application, users must create an account & sign in to gain access. Upon a successful log-in, users can change the account password, create/delete/update a task, view all tasks, search for tasks using an existing tasks' ID & log out.

*** USER STORIES ***
- as a user, id like to group similar tasks with one another
- as a user, id like to view all my tasks at once
- as a user, id like tasks to be suggested to me

*** HOW TO USE APP ***

***Sign-up:*** Click one of the deployment links above to open application. Click the SIGN UP button. User are required to fill out three text fields: e-mail address, password & confirm password. Be sure that the text typed into the password & confirm password fields are the same. If they are a match & the e-mail address is valid, user will see two text fields appear to SIGN IN.

***Sign-in:*** Click one of the deployment links above to open application. Click the SIGN IN button. Click on the SIGN UP button User must enter the e-mail address that was used to create the account & their current password. If user clicked on SIGN UP by mistake, no worries. SIGN IN should still be an option, just click the button.

***EVERY ACTION LISTED BELOW REQUIRES USER TO SIGN-UP &/OR SIGN-IN***

*Change password:* sign up for an account & sign in (or sign in if user has already created an account) and upon successful log-in, user will see a row of buttons. click 'change password' & a form with three text fields should appear. fill in as instructed (first field: old password, second field: new password, third field: confirm new password) and click 'confirm'.

*Create new task:* Click on the CREATE button. Enter the task of choice & the date it is due. Both are required to successfully create a new task.

*View all tasks:* Click on the VIEW ALL TASKS button. Tasks should be listed below.

*Show one task:* Click on SEARCH button. Enter the ID of the task you are searching for & click submit. Task will appear below.

*Update task:* Click on UPDATE button. Three form fields should appear. Fill in each one as instructed (first field: Enter the ID of the task you'd like to update, second field: enter the updated task, third field: enter due date), then click UPDATE TASK.

*Delete Task:* Click on DELETE BUTTON. Enter the ID of the TASK you'd like to delete, then click DELETE TASK.

*Log-out:* Click the SIGN OUT button at any time.

*** Unsolved problems, updates to expect: ***
- Find tasks by text and/or date.
- Display & refresh the list every time a new task is created.
- Reformat the date element and add an optional field for time.
- Make the search (SHOW), update (PATCH) & delete (DESTROY) actions more user friendly (eg., implement a checkbox so users can select the task(s).
- Index all user's task by default or possibly store them in lists that displays upon log-in

*** Technologies used: ***
JavaScript
HTML
BOOTSTRAP
CSS
MongoDB
Mongoose
[JustInMind forWireframe](https://www.justinmind.com/)

*** Resources: ***
[Al Gore's internet](google.com)
[JQuery's website](https://api.jquery.com/)
https://stackoverflow.com/
https://getbootstrap.com
https://developer.mozilla.org/
