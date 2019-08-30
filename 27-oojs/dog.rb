class Dog

  def initialize(name, age, breed, owner)
    @name = name
    @age = breed
    @owner = owner
    @age = age
  end

  def dog_tag
    "My name is " + self.name
  end

end

mango = Dog.new("Mango", 1, "Mutt", "Chris")

# <#Dog 3485739845 @name="Mango"...>
# Ruby instances
