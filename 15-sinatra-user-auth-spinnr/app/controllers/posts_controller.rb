class PostsController < ApplicationController

  # GET: /posts
  get "/posts" do
    @posts = Post.all
    erb :"/posts/index.html"
  end

  # GET: /posts/new
  get "/posts/new" do
    erb :"/posts/new.html"
  end

  # POST: /posts
  post "/posts" do
    post = Post.new(params[:post])
    post.user = current_user
    post.save
    binding.pry
    redirect "/posts/#{post.id}"
  end

  # GET: /posts/5
  get "/posts/:id" do
    @post = Post.find(params[:id])
    if @post.private && @post.user == current_user
      #creating code to prevent people who aren't this user form seeing this post
      erb :"/posts/show.html"
    else
      redirect "posts"
    end
  end

  # GET: /posts/5/edit
  get "/posts/:id/edit" do
    erb :"/posts/edit.html"
  end

  # PATCH: /posts/5
  patch "/posts/:id" do
    redirect "/posts/:id"
  end

  # DELETE: /posts/5/delete
  delete "/posts/:id/delete" do
    redirect "/posts"
  end
end
