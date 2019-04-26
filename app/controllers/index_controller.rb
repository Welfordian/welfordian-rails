class IndexController < ActionController::Base
    layout 'application'

    def show()
        @posts = Post.all
    end
end