require 'rest-client'
require 'json'
require 'pry'

res = RestClient.get("https://www.googleapis.com/books/v1/volumes?q=harry+potter")
json = JSON.parse(res)
binding.pry
