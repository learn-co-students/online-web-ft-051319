### code here!!
class School

  attr_accessor :name, :roster

  #attr_accessor makes these for us:

  #def name
  #  @name
  #end

  #def name=(name)
  # @name = name
  #end

  #def roster
  #  @roster
  #end

  #def roster=(roster)
  # @roster = roster
  #end

  def initialize(school_name)
    @name = school_name
    @roster = {}
  end

  def add_student(student_name, student_grade)
    if @roster[student_grade] == nil
      @roster[student_grade] = [student_name]
    else
      @roster[student_grade] << student_name
    end

    #using the or-equals operator
    #@roster[grade] ||= []
    #@roster[grade] << name

    #ternary operator way no1
    #@roster[grade] == nil ? @roster[grade] = [name] : @roster[grade] << name

    #ternary operator way no2
    #@roster[grade] ? @roster[grade] : @roster[grade] = [] 
    #@roster[grade] << student_name
  end

  def grade(grade)
    @roster[grade]
  end

def sort

#non-destructive way
sorted_roster = {}
  @roster.each do |grade, names|
    sorted_roster[grade] = names.sort
  end
  sorted_roster

# descructive method
#   roster.each do |grade,names|
#     names.sort!
#   end

end




end

#example of NoMethodError
# hamilton_high = School.new("Hamilton High School")
# hamilton.mascot => NoMethodError, undefined method mascot for #<School34509809345>
