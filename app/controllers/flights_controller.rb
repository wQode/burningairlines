class FlightsController < ApplicationController
  def index
    @flights = Flight.all
      respond_to do |format|
        format.html {}
        format.json{ render :json => @flights }
      end
  end

  def show
    @flight = Flight.find params[:id]
  end

  def create
    @flight = Flight.create flight_params
    render :json => @flight
  end

  def update
    @flight = Flight.find params[:id]
    @flight.update flight_params
    render :json => @flight
  end


  private
    def flight_params
      params.require(:flight).permit(:name, :origin, :destination, :date, :airpline_id)
    end
  
  
end
