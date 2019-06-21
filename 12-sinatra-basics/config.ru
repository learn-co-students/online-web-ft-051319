require_relative './config/environment.rb'

#put our controller

run ApplicationController
use DirectorsController
use MoviesController
