Movie.destroy_all
Director.destroy_all
Genre.destroy_all

chris = Director.create(name: "Chris", hometown: "Chandler, AZ")
brians = Director.create(name: "Brian S", hometown: "Somewhere, NH")

horror = Genre.create(name: "Horror")
family = Genre.create(name: "Family")

titanic = Movie.create(director: chris, genre: horror, title: "Titanic", description: "V v sad and long", gross: 23452934850245, rating: 10)
pets = Movie.create(director: chris, genre: family, title: "Pets 2", description: "Animated", gross: 13452934850245, rating: 7)
wereback = Movie.create(director: brians, genre: horror, title: "We're Back!", description: "Dinosaurs on floats come to life!", gross: 934850245, rating: 6)
jurassicpark = Movie.create(director: brians, genre: family, title: "Jurassic Park", description: "Dinosaurs come to life from frogs...and eat people... v scary", gross: 21452934850245, rating: 9)

binding.pry
