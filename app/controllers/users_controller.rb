class UsersController < ApplicationController
  def index
    @users = User.all
  end

  def new
    @user = User.new

  end

  def create
    @user = User.create user_params
      if @user.save
        redirect_to user_path
      else
        redirect_to root_path
      end
  end

  def edit
    @user = User.find params[:id]
    unless @user.id == @current_user.id
    redirect_to calendar_show_path
    end
  end

  def update
    user = User.find params[:id]
    user.update user_params

    redirect_to user
  end

  def show
    @user = @current_user # User.find params[:id]
    if @user.nil?
      redirect_to root_path
    end
  end

  def destroy
    user = User.find params[:id]
    user.destroy

    redirect_to users_path
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :password_confirmation)
  end
end