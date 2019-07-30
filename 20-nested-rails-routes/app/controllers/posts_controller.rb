class PostsController < ApplicationController

  def index
    if params[:category_id]
      @category = Category.find(params[:category_id])
      @posts = @category.posts
    else
      @posts = Post.all
    end
  end

  def show
    @post = Post.find(params[:id])
  end

  def new
    @post = Post.new
    category_id = params[:category_id]
    if category_id
      @post.category_id = category_id
    end
  end

  def create
    @post = Post.create(post_params)
    redirect_to category_post_path(@post.category, @post)
  end

  private

  def post_params
    params.require(:post).permit(:title, :body, :category_id)
  end

end
