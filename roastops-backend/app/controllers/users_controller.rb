class UsersController < ApplicationController
  def create
    user = User.new(user_params)

    if user.save
      render json: { message: 'User registered successfully' }, status: :created
    else
      render json: { message: user.errors.full_messages.join(', ') }, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.permit(:email, :password, :password_confirmation)
  end
end
