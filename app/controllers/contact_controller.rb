class ContactController < ActionController::Base
    layout 'application'

    def show

    end

    def create
        ContactMailer.with(request: request).main_email.deliver_now


        flash[:notice] = 'Message sent successfully'
        redirect_to '/contact'
    end
end
