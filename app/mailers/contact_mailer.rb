class ContactMailer < ApplicationMailer
  def main_email
    @request = params[:request]

    mail(to: 'josh@welford.me', subject: 'Contact Request', reply_to: @request[:email], from: @request[:full_name] + ' <josh@welford.me>')
  end
end
