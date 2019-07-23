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
    @student = Student.new(student_params)
    if @student.valid?
      @student.save
      redirect_to @student
    else
      render :new
    end
  end

  def edit
    # @student = Student.find(params[:id]) being called in before_action
    #passing this saved instance of the student to our form_for
  end

  def update
        # @student = Student.find(params[:id]) being called in before_action
    if @student.update(student_params)
      redirect_to @student
    else
      render :edit
    end
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
