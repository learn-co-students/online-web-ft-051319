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
    #use .new to make an instance but not save it
    @student = Student.new(student_params)
    if @student.valid?
      #.valid? runs validations
      @student.save
      #.save saves
      redirect_to @student
      #Sinatra Way
      #redirect_to "/students/#{student.id}"
      # Rails-ish way
      #redirect_to student_path(student or student.id)
      #Powerful Rails way
    else
      #we needed to make the variable above an instance variable so we could pass it to this view in case of errors.
      #notice this is not a redirect
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
      #.update will not pass this IF statement if there are rrors. 
      redirect_to @student
    else
      #we needed to make the variable above an instance variable so we could pass it to this view in case of errors.
      #notice this is not a redirect
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
