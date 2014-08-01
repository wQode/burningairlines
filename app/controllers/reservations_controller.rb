class ReservationsController < ApplicationController
  def index
    @reservations = Reservation.all
      respond_to do |format|
        format.html {}
        format.json{ render :json => @reservations }
      end
  end

  def show
    @reservation = Reservation.find params[:id]
  end

  def create
    @reservation = Reservation.create reservation_params
    render :json => @reservation
  end

  def update
    @reservation = Reservation.find params[:id]
    @reservation.update reservation_params
    render :json => @reservation
  end


  private
    def reservation_params
      params.require(:reservation).permit(:user_id, :flight_id)
    end


end
