class UsersController < ApplicationController
  def index
  end

  def new
  end

  def create
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private
  def users_params
    params.require(:user).permit(:username, :password, :password_confirmation)
  end
end