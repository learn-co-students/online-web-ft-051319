class StudentsController < ApplicationController
  before_action :set_student, only: [:show]

  #Sinatra way
  #INDEX action is not explicit, implied through the naming of the view
  # get '/students' do
  #
  #   erb: '/students/index'
  # end

  #Rails way
  def index
    @students = Student.all
    render :index
  end

  def new
  end

  def show
    #set_student is being called here because of before_action
    #@student = Student.find(params[:id])
  end

  private

  def set_student
    @student = Student.find(params[:id])
  end

end
