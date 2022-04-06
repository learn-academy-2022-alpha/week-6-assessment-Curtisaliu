# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer:
I believe you will need to make a foreign key column, but it will auto-populate for you  after the creation of it. Additionally, you will need to migrate the model. I believe the foreign key can be anything. Finally, it will be a student model. 

  Researched answer:
The developer will need to make a student model with the foreign key column explicitly defined as part of the migrations. The foreign key will also need to be named cohort_id. Lastly, the foreign key will be on the Student model but will belong to the Cohort model. 

2. Which RESTful routes must always be passed params? Why?

  Your answer:
  I believe the RESTful routes that must always be passed params are Show, create, edit, update, destroy. These RESTful routes must be passed a param in order to pull or create a specific post. 

  Researched answer:
The RESTful routes show, create, edit update, and destroy all need to be passed params. The two that do not need to be passed params are index and new. The reason for this is that all other routes are pulling from a post to perform an action. The id must be passed in the params. 


3. Name three rails generator commands. What is created by each?

  Your answer:
 - rails generate model --> creates the file and also the schema
 - rails generate controller --> makes a folder that creates a controller and a place to store its method. 
 - rails generate rspec --> I believe this creates the spec folder that contains rspec. 


  Researched answer:
- rails generate model --> is the setup command that is passed to rails. What is created is two files db/migrate/.... and also the app file with the model. app/models/....
- rails generate controller --> Create a new controller. The command will create several folders but the most notable one is app/controllers/(name).
- bundle add rspec rails/rails generate rspec: install --> creates a directory called spec that contains a folder and files for the tests.


4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET"    location: /students          
I believe this controller method would be called index. This will display a list of the students.

action: "POST"   location: /students       
This controller method would be create, additionally it will create a new student. 

action: "GET"    location: /students/new
This controller method would be new, and this will return an HTML form for creating a new student. 

action: "GET"    location: /students/2  
This controller method would be show, and this will display the specific student.

action: "GET"    location: /students/2/edit    
This controller method will be edit, and will return an HTML form for editing a student. 

action: "PATCH"  location: /students/2      
This controller method will be update, and will update a specific student. 

action: "DELETE" location: /students/2      
This controller method will be destroy, and will delete a specific photo. 


5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

1. As a User, I want to make a list, so that we can see what we need to do. 
2. As a User, I want a way to add an item, so that we can add more on to our to-do list. 
3. As a User, I want a way to check off items, so that we can see completed items on our to-do list. 
4. As a User, I want to organize my list, so I can group or time items I need to complete first. 
5. As a User, I want to see dates, so I can see when assignments are due. 
6. As a User, I want seperate categories on my list, so that I can seperate daily tasks and future tasks. 
7. As a User, I want to share my list, so that others can see my work load. 
8. As a User, I want the list to be collaborative, so that a team can work on the list together. 
9. As a User, I want to see the history of my list, so that I can see what I have accomplished in the past. 
10. As a User, I want to have reminders, so that I get reminded of assignments I need to complete soon. 
11. As a User, I want to have subtasks as an option, so that I can break up assingments into parts. 
12. As a User, I want a dark mode feature, so my eyes do not get hurt from the shine of a screen. 
