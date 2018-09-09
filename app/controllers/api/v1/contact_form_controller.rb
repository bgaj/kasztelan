class Api::V1::ContactFormController < ApplicationController
  include Response
  include ExceptionHandler


  def create
    contact_form = ContactForm.new(params.permit(:email, :subject, :message))
    if contact_form.valid?
      ContactMailer.contact_form(contact_form.attributes).deliver_now
      render status: 200, json: {message: 'ok'}
    else
      render status: 400, json: {errors: contact_form.errors}
    end
  end

  private

  def valid_params
    render status: 406, json: {error: "Wrong params structure" } unless params.present? && params.has_key?(:email) && params.has_key?(:message)
  end

end