class AirplanesController < ApplicationController
  def index
    @airplanes = Airplane.all
     render :json => @airplanes    
  end
end
