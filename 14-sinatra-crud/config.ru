require_relative './config/environment.rb'

#put our controller

run ApplicationController
use Rack::MethodOverride
use DirectorsController
use MoviesController
