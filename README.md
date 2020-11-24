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

*Change password:* sign up for an account & sign in (or sign in if user has already created an account) and upon successful log-in, a navigation bar will appear. Click SETTINGS then select CHANGE PASSWORD & a form with three text fields should appear. fill in as instructed (first field: old password, second field: new password, third field: confirm new password) and click 'confirm'.

*Create new task:* Click on the CREATE. Enter the task & the date it is due. Both are required to successfully create a new task.

*View all tasks:* Click on TASKS. Tasks should be listed below.

*Show one task:* Enter the ID of the task you are searching for & click submit. Task will appear below.

*Update task:* Click on UPDATE. Three form fields should appear. Fill in each one as instructed (first field: Enter the ID of the task you'd like to update, second field: enter the updated task, third field: enter due date), then click UPDATE TASK. Click TASKS in the navigation bar to view new task on list.

*Delete Task:* Click on DELETE. Enter the ID of the TASK you'd like to delete, then click DELETE TASK.

*Log-out:* Click the SIGN OUT button at any time.

    __document your planning and tell a story about your development process__
    My BIG idea was to create an app that recorded & tracked tasks shared by a small group of people. I decided to start with a task list designed for one user in hopes to continue adding features & actions that will become the bigger idea of a task list network.

    __problem-solving strategy__
     While creating V1, every time I ran into a bug or something wasn't working correctly, I would check my server,  SourceMap, 'd (& used the SourceMap to figure out where to log data in the console during troubleshooting), run GRUNT MAKE-STANDARD & read my classmates' issues.

*** Unsolved problems, updates to expect: ***
- Find tasks by text and/or date.
- Display & refresh the list every time a new task is created.
- Reformat the date element and add an optional field for time.
- Make the search (SHOW), update (PATCH) & delete (DESTROY) actions more user friendly (eg., implement a checkbox so users can select the task(s).
- Index all user's task by default & categorize them by lists that displays upon log-in
Unfortunately, I was not able to figure out how to implement my LIST model without making a mess.

*** Technologies used: ***
JavaScript
HTML
BOOTSTRAP
CSS
MongoDB
Mongoose

*** Resources: ***
[Al Gore's internet](google.com)
[JQuery's website](https://api.jquery.com/)
https://stackoverflow.com/
https://getbootstrap.com
https://developer.mozilla.org/
