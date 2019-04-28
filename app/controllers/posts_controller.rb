class PostsController < ActionController::Base
    layout 'application'

    def show()
        @post = Post.where(:slug => params[:slug]).first
    end
end