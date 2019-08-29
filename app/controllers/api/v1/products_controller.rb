class Api::V1::ProductsController < ApplicationController
  include Response
  include ExceptionHandler

  def index
    products = Product.all
    render jsonapi: products
  end
end