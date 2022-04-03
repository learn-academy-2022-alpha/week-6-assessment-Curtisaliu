# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
# I believe this is the model class which is automatically generated  when we generate a model and run a database migration. 
# def index is a controller method that will allow access to all the items from the database. 
class BlogPostsController < ApplicationController
  def index
    # ---2)
    # @posts is an instance variable which will save all the content from the database as an active record call.
    # This is denoted by the .all at the end. 
    @posts = BlogPost.all
  end

  # ---3)
  # Define show is declaring a method. Show is a RESTFul route method that looks for one item in the database. 
  # Post is an instance variable that is an active record to find one item by the id. The id will coem from the url params. 
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  # New is a RESTful route method that displays a form for the user, thus allowing users to add information to the web application to store in the database.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)
    # @post is an instance variable for the method create which is a restful route that submits user data to the database. 
    # Underneath the instance variable, is a conditional which redirects the user if they enter information that submits correctly to the blog post that they entered. If the user enter something that was not register correctly for the blog post they will be redirected to the page in which they can create a new blog post again. 
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6)
    # Define edit is creating a method in order to create an edit action that will handle the rednering of the edit form. This particular form can be find typing in the id. Additionally, the particular form can be updated by being found using the id.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    # The update method is an action that will actually update the database record itself.
    # If the update was successful, the user will be redirected to the blog post that they updated. 
    # If the update was not successful, the user will be redirected to the same page in which they can try to update again. 
    # The destroy method removes the record from the database. 
    # The conditional will either redirect the user's browser to the langing page or will redirect them to the page in which they can try to destroy the post again. 

    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8)
      # An else conditional in which if the destroy action fails, the user will be redirected to the same page. 

      redirect_to blog_post_path(@post)
    end
  end

  # ---9)
  # By using private, the method is only usable in the class. Thus, the method cannnot be called to another class. 
  # def blog_post_params is just declaring the method. 

  private
  def blog_post_params
    # ---10)
    # The user will only be able to pass in the params of title and content. 
    params.require(:blog_post).permit(:title, :content)
  end
end
