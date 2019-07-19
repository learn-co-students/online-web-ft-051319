class StudentsController < ApplicationController
  before_action :set_student, only: [:show, :edit, :update, :destroy]

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
    #passing this empty instance of a student to the new form, which uses form_for
    @student = Student.new
  end

  def create
    student = Student.create(student_params)
    #Sinatra Way
    #redirect_to "/students/#{student.id}"
    # Rails-ish way
    #redirect_to student_path(student or student.id)
    #Powerful Rails way
    redirect_to student
  end

  def edit
    # @student = Student.find(params[:id]) being called in before_action
    #passing this saved instance of the student to our form_for
  end

  def update
        # @student = Student.find(params[:id]) being called in before_action
    @student.update(student_params)
    redirect_to @student
  end

  def show
    #set_student is being called here because of before_action
    #@student = Student.find(params[:id])
  end

  def destroy
        # @student = Student.find(params[:id]) being called in before_action
    @student.destroy
    redirect_to students_path
  end

  private

  def set_student
    @student = Student.find(params[:id])
  end

  def student_params
    params.require(:student).permit(:name, :grade, :teacher, :honors)
  end

end
