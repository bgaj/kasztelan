class ContactMailer < ApplicationMailer

  def contact_form(params={})
    @email = params[:email]
    @subject = params[:subject]
    @message = params[:message]
    mail(to: 'bartek.gaj1992@gmail.com', subject: "Kasztelan Rozprza #{@subject}")
  end
end