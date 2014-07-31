class AirplanesController < ApplicationController

  def index
    @airplanes = Airplane.all
     render :json => @airplanes    
  end

  def create
    airplane = Airplane.new airplane_params
    airplane.save

  end

  def new
    @airplane = Airplane.new
  end

  def edit
    @airplane = Airplane.find params[:id]
  end

  def show
    @airplanes = Airplane.find params[:id]

  end

  def update
    airplanes = Airplanes
  end

  def destroy
  end


  private
    def airplane_params
      params.require(:airplane).permit(:name, :rows, :colum)
    end

end
