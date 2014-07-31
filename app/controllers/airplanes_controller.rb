class AirplanesController < ApplicationController

  def index
    @airplanes = Airplane.all

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

# airplanes GET    /airplanes(.:format)          airplanes#index
#               POST   /airplanes(.:format)          airplanes#create
#  new_airplane GET    /airplanes/new(.:format)      airplanes#new
# edit_airplane GET    /airplanes/:id/edit(.:format) airplanes#edit
#      airplane GET    /airplanes/:id(.:format)      airplanes#show
#               PATCH  /airplanes/:id(.:format)      airplanes#update
#               PUT    /airplanes/:id(.:format)      airplanes#update
#               DELETE /airplanes/:id(.:format)      airplanes#destroy


 # create_table "airplanes", force: true do |t|
 #    t.string   "name"
 #    t.string   "rows"
 #    t.string   "colums"
 #    t.datetime "created_at"
 #    t.datetime "updated_at"
 #  end