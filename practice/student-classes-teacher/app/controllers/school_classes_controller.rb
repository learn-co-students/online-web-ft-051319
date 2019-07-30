class SchoolClassesController < ApplicationController
  def new
    @school_class = SchoolClass.new
    @students = Student.all
    @teachers = Teacher.all
  end

  def create
    @school_class = SchooClass.create(school_class_params)
    redirect_to @school_class
  end

  def update
    @school_class = SchoolClass.find(params[:id])
    if @school_class.update(school_class_params)
    else
      render :edit
    end
  end

  private

  def school_class_params
    params.require(:school_class).permit(:student_id, :teacher_id, :subject, :hour)
  end

end
