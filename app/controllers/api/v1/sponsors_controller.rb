class Api::V1::SponsorsController < ApplicationController
  include Response
  include ExceptionHandler

  def index
    sponsors = Sponsor.all
    render jsonapi: sponsors
  end

end